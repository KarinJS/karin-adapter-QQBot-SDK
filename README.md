# 克隆仓库

karin根目录执行以下命令克隆仓库到本地

```bash
git clone https://github.com/karinjs/karin-adapter-QQBot-SDK.git ./plugins/karin-adapter-QQBot-SDK
```

## 安装依赖

```bash
pnpm install --filter=karin-adapter-qqbot-sdk
```

## 配置机器人

```yaml
QQBot:
  - appid: '' # 这里必须要是字符串 tx.sb
    secret: ''
    sandbox: false
    removeAt: true
    logLevel: info
    maxRetry: 10
    type: 1 # 1=直接发 2=模板 3=原生 2需要配置custom_template_id 请填写纯数字
    custom_template_id: 
    intents:
      - GROUP_AT_MESSAGE_CREATE
      # - C2C_MESSAGE_CREATE
      # - GUILD_MESSAGES
      # - PUBLIC_GUILD_MESSAGES
      # - DIRECT_MESSAGE
      # - GUILD_MESSAGE_REACTIONS
      # - GUILDS
      # - GUILD_MEMBERS
      # - DIRECT_MESSAGE
```

## 配置图床

> 暂时只适配图片，可配置多个，上一个失败自动下一个...

```js
import axios from 'axios'
import { common, plugin } from '#Karin'

/** key获取地址：https://api.imgbb.com/ 登录后获取即可 */
const key = ''

/** 上传后是否自动删除，单位秒 */
const expiration = '600'

export class UploadImage extends plugin {
  constructor () {
    super({
      name: 'imgbb图床',
      handler: [
        {
          key: 'QQBot.upload.Image',
          fnc: 'image',
          priority: 80
        }
      ]
    })
  }

  async image (args, reject) {
    const file = await common.base64(args.file)
    const formData = new FormData()
    formData.append('key', key)
    formData.append('image', file)

    if (expiration) formData.append('expiration', expiration)

    // 重试2次
    let res
    for (let i = 0; i < 2; i++) {
      res = await this.uploadImage(formData)
      if (res) break
    }
    if (!res) {
      reject('[imgbb图床] 上传失败')
      return false
    }
    return res
  }

  // 上传图片
  async uploadImage (data) {
    const url = 'https://api.imgbb.com/1/upload'
    const res = await axios({
      method: 'post',
      url,
      data,
      headers: {
        'User-Agent': 'PostmanRuntime-ApipostRuntime/1.1.0',
        'Cache-Control': 'no-cache'
      }
    })
    if (res.status === 200) {
      const { data } = res.data
      data.url = data.url.replace(/^https:\/\//, 'https://i0.wp.com/')
      return data
    }
    return false
  }
}

```
