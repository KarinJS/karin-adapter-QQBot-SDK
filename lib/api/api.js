import { Bot, KarinMessage, adapter, common, logger, segment } from '#Karin'
import { Bot as QQBotSdk } from 'qq-group-bot'
import { FileInfo } from '../../model/proto/File.js'
import Common from '../common/common.js'
import Config from '../config/config.js'
import { KarinConvertAdapterMarkdown, KarinConvertAdapterTemplate } from '../elements/elements.js'

export default class QQBot extends adapter {
  #id = ''
  config
  sdk
  constructor (config) {
    super()
    config.appid = String(config.appid)
    this.#id = config.appid
    this.config = config
    /** 账户信息 */
    this.account = {
      uid: this.#id,
      uin: '', // 机器人的群id
      name: ''
    }
    this.adapter = {
      type: 'QQ',
      name: 'QQBot',
      /** 启动时间戳 */
      start_time: Date.now()
    }
    this.version = {
      app_name: 'qq-group-bot',
      version: Config.package.dependencies['qq-group-bot']
    }
    this.sdk = new QQBotSdk(this.config)
  }

  async init () {
    await this.sdk.start()

    this.sdk.on('message', (data) => {
      const { user_id, group_id, message_id, message } = data
      const e = new KarinMessage({
        time: Date.now(),
        self_id: this.#id,
        user_id,
        group_id,
        message_id,
        message_seq: '',
        raw_message: '',
        contact: {
          scene: 'group',
          peer: group_id,
          sub_peer: group_id
        },
        sender: {
          uid: user_id,
          uin: user_id,
          nick: ''
        },
        elements: this.AdapterConvertKarin(message)
      })
      e.replyCallback = async (elements) => {
        // 模板Markdown
        if (this.config.type === 2) {
          return await KarinConvertAdapterTemplate({
            elements,
            bot: this,
            contact: e.contact,
            message_id: e.message_id
          })
        } else if (this.config.type === 3) {
          // 原生
          return await KarinConvertAdapterMarkdown({
            elements,
            bot: this,
            contact: e.contact,
            message_id: e.message_id
          })
        } else {
          // 普通消息
          return await data.reply(await this.KarinConvertAdapter(elements))
        }
      }
      e.data = data
      Bot.emit('message', e)
    })
    Bot.emit('bot', this)
  }

  /** 日志 加上前缀 */
  logger (level, ...args) {
    logger[level](common.logger(this.account.uin, ...args))
  }

  /**
   * 获取头像url
   * @param size 头像大小，默认`0`
   * @param uid 用户qq，默认为机器人QQ
   * @returns 头像的url地址
   */
  getAvatarUrl (uid = this.#id, size = 0) {
    return `https://q.qlogo.cn/qqapp/${this.#id}/${uid}/${size}`
  }

  /**
    * 发送消息
    *
    * @param {Contact} contact
    * @param {Array<KarinElement>} elements
    * @returns {Promise<message_id>} - 消息ID
    */
  async SendMessage (contact, elements) {
    let { peer } = contact
    // 群消息
    return this.sdk.sendGroupMessage(peer, await this.KarinConvertAdapter(elements))
  }

  /**
     * 获取群头像
     * @param {string} group_id - 群号
     * @param {number} [size] - 头像大小，默认`0`
     * @param {number} [history] - 历史头像记录，默认`0`，若要获取历史群头像则填写1,2,3...
     * @returns {string} - 群头像的url地址
     */
  getGroupAvatar (group_id, size = 0, history = 0) {
    return `https://p.qlogo.cn/gh/${group_id}/${group_id}${history ? '_' + history : ''}/` + size
  }

  /** qq-group-bot转karin */
  AdapterConvertKarin (data) {
    const elements = []
    for (let i of data) {
      switch (i.type) {
        case 'text':
          elements.push(segment.text(i.text))
          break
        case 'face':
          elements.push(segment.face(i.id))
          break
        case 'image':
          elements.push(segment.image(i.url || i.file))
          break
        case 'video':
          elements.push(segment.video(i.url || i.file))
          break
        case 'at':
        case 'audio':
        case 'poke':
        case 'contact':
        case 'location':
        case 'music':
        case 'reply':
        case 'forward':
        case 'node':
        case 'file':
        case 'json':
        case 'xml':
        case 'custom':
        case 'button':
        case 'rows':
        default: {
          elements.push(segment.text(JSON.stringify(i)))
        }
      }
    }
    return elements
  }

  /** karin转qq-group-bot */
  async KarinConvertAdapter (data) {
    const elements = []
    for (let i of data) {
      switch (i.type) {
        // 屏蔽at
        case 'at':
          break
        case 'text': {
          let text = (i.text + '').replace(/@everyone/g, 'everyone')
          const data = await Common.UrlToImg(text)
          elements.push({ type: 'text', text: data[0].text })
          // 去除文字
          data.shift()
          elements.push(...data)
          break
        }
        case 'reply':
          elements.push({ type: 'reply', id: i.message_id })
          break
        case 'voice': {
          let file = i.file
          file = await Common.Mp3ToSilk(file)
          elements.push({ type: 'audio', file: `file://${file}` })
          break
        }
        case 'button':
          elements.push({ type: 'button', buttons: i.buttons })
          break
        case 'image':
        case 'video':
        case 'file':
        case 'markdown': {
          const { type, ...data } = i
          elements.push({ type, ...data })
          break
        }
        case 'rows':
          for (let val of i.rows) {
            elements.push({ type: 'button', buttons: val.buttons })
          }
          break
        case 'face':
        case 'xml':
        case 'json':
        case 'node':
        case 'forward':
        case 'music':
        case 'poke':
        default: {
          elements.push(i)
          logger.info(i)
        }
      }
    }
    return elements
  }

  /**
   * 上传多媒体文件
   * @param {string} target_id 接受者id
   * @param {string} file_data 文件数据：可以是本地文件(file://)或网络地址(http://)或base64或Buffer
   * @param {string} [target_type='group'] 接受者类型：user|group
   * @param {number} [file_type=1] 数据类型：1 image;2 video; 3 audio
   * @returns {Promise<{file_uuid:string, file_info:string}>} - 文件ID
   */
  async uploadMedia ({ target_id, file_data, target_type = 'group', file_type = 1 }) {
    let { file_info } = await this.sdk.uploadMedia(target_id, target_type, file_data, file_type)
    file_info = FileInfo.decode(Buffer.from(file_info, 'base64'))
    const { md5, width, height } = file_info.field1.field2.field1.field1.field1
    const path = file_info.field1.field3.field34.path
    const host = file_info.field1.field2.field1.field2.host.replace('.com.cn', '.com')
    let url = `http://${host}${path}`.replace(/_/g, '%5F')
    return { md5, width, height, url }
  }
}
