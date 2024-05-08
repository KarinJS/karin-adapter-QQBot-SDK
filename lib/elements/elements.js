import { segment, button } from '#Karin'
import Common from '../common/common.js'

// todo: 后续使用handler代替
/** 拓展api karin转qq-group-bot 原生Markdown */
export async function KarinConvertAdapterMarkdown ({ elements, bot, contact, message_id, e }) {
  const content = []
  const message = []

  const { scene, peer: target_id } = contact
  const target_type = scene === 'group' ? 'group' : 'user'

  for (let i of elements) {
    switch (i.type) {
      case 'text': {
        let text = (i.text + '').replace(/@everyone/g, 'everyone').replace(/\n/g, '\r')
        const data = Common.UrlToBut(text)
        // 第一个为文字，其他为按钮 按钮存入message
        content.push(data[0].text)
        // 去除文字
        data.shift()
        message.push(...data)
        break
      }
      case 'at': {
        const target_id = (i.uid || i.uin) + ''
        let text = `<@${target_id}>`
        if (target_id === 'all') text = '@everyone'
        content.push(text)
        break
      }
      case 'reply':
        message.push({ type: 'reply', id: i.message_id })
        break
      case 'image': {
        const { width, height, url } = await bot.uploadMedia(i.file)
        content.push(`![karin #${width}px #${height}px](${url})`)
        break
      }
      case 'video':
      case 'file':
        message.push({ type: i.type, file: i.file })
        break
      case 'voice': {
        let file = i.file
        file = await Common.Mp3ToSilk(file)
        message.push({ type: 'audio', file: `file://${file}` })
        break
      }
      case 'button':
      case 'markdown': {
        message.push(i)
        break
      }
      case 'rows':
        for (let val of i.rows) {
          message.push({ type: 'button', buttons: val.buttons })
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
        message.push({ type: 'text', text: JSON.stringify(i) })
      }
    }
  }

  // todo 超出10个消息段
  if (content.length > 0) {
    message.push(segment.markdown(content.join('')))
    // 加入按钮
    const buttons = await button.get(e)
    if (buttons.length > 0) message.push(...buttons)
  }
  if (message_id) message.unshift({ type: 'reply', id: message_id })

  // 群
  if (target_type === 'group') {
    return await bot.sdk.sendGroupMessage(target_id, message)
  } else {
    return await bot.sdk.sendPrivateMessage(target_id, message)
  }
}

// todo: 后续使用handler代替
/** 拓展api karin转qq-group-bot Templat 使用text_0-9模板 */
export async function KarinConvertAdapterTemplate ({ elements, bot, contact, message_id, e }) {
  let count = -1
  const params = []
  const message = []

  const { scene, peer: target_id } = contact
  const target_type = scene === 'group' ? 'group' : 'user'

  for (let i of elements) {
    count++
    switch (i.type) {
      case 'text': {
        let text = (i.text + '').replace(/@everyone/g, 'everyone').replace(/\n/g, '\r')
        const data = Common.UrlToBut(text)
        // 第一个为文字，其他为按钮 按钮存入message
        params.push(segment.params(`text_${count}`, data[0].text))
        // 去除文字
        data.shift()
        message.push(...data)
        break
      }
      case 'at': {
        const target_id = (i.uid || i.uin) + ''
        let text = `<@${target_id}>`
        if (target_id === 'all') text = '@everyone'
        params.push(segment.params(`text_${count}`, text))
        break
      }
      case 'reply':
        message.push({ type: 'reply', id: i.message_id })
        break
      case 'image': {
        const { width, height, url } = await bot.uploadMedia(i.file)
        // 将图片分成2个消息段
        params.push(segment.params(`text_${count}`, `![karin #${width}px #${height}px`))
        count++
        params.push(segment.params(`text_${count}`, `](${url})`))
        break
      }
      case 'video':
      case 'file':
        message.push({ type: i.type, file: i.file })
        break
      case 'voice': {
        let file = i.file
        file = await Common.Mp3ToSilk(file)
        message.push({ type: 'audio', file: `file://${file}` })
        break
      }
      case 'button':
        message.push({ type: 'button', buttons: i.buttons })
        break
      case 'markdown': {
        message.push(i)
        break
      }
      case 'rows':
        for (let val of i.rows) {
          message.push({ type: 'button', buttons: val.buttons })
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
        message.push({ type: 'text', text: JSON.stringify(i) })
      }
    }
  }

  // todo 超出10个消息段
  if (params.length > 0) {
    const { custom_template_id } = bot.config
    message.push(segment.markdown({ custom_template_id, params }))
    // 加入按钮
    const buttons = await button.get(e)
    if (buttons.length > 0) message.push(...buttons)
  }
  if (message_id) message.unshift({ type: 'reply', id: message_id })

  // 群
  if (target_type === 'group') {
    return await bot.sdk.sendGroupMessage(target_id, message)
  } else {
    return await bot.sdk.sendPrivateMessage(target_id, message)
  }
}
