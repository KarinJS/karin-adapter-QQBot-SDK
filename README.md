# 克隆仓库

karin根目录执行以下命令克隆仓库到本地

```bash
git clone https://github.com/karinjs/karin-adapter-QQBot-SDK.git ./plugins/karin-adapter-QQBot-SDK
```

## 安装依赖

```bash
pnpm install --filter=karin-adapter-QQBot-SDK
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
