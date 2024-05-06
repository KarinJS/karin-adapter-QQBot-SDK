// eslint-disable-next-line import/no-unresolved
import { encode } from 'silk-wasm'
import { ffmpeg, logger, common, segment } from '#Karin'
import fs from 'fs'
import get_urls from 'get-urls'
import qrcode from 'qrcode'
import Jimp from 'jimp'

class Common {
  /**
   * 将 MP3 文件转换为 Silk 文件
   */
  async Mp3ToSilk (mp3Data) {
    // 开始计时
    let start = Date.now()

    const file = process.cwd() + `/temp/karin-adapter-QQBot-SDK/${Date.now()}`
    const mp3 = `${file}.mp3`
    const pcm = `${file}.pcm`
    const silk = `${file}.silk`

    // mp3 转文件
    mp3Data = await common.buffer(mp3Data)
    fs.writeFileSync(mp3, mp3Data)

    await ffmpeg(`-i "${mp3}" -f s16le -ar 48000 -ac 1 "${pcm}"`)
    logger.info('[语音转码] mp3 => pcm 完成')
    const data = fs.readFileSync(pcm)
    const res = await encode(data, 48000)
    // 保存 silk 文件
    fs.writeFileSync(silk, res.data)
    logger.info('[语音转码] pcm => silk 完成')
    // 删除 mp3 文件
    fs.unlinkSync(mp3)
    // 删除 pcm 文件
    fs.unlinkSync(pcm)
    // 结束计时
    let end = Date.now()
    logger.info(`[语音转码] 耗时 ${end - start}ms`)
    // 1分钟后删除 silk 文件
    setTimeout(() => {
      fs.unlinkSync(silk)
    }, 60000)
    return silk
  }

  /**
   * 传入字符串 提取url 返回数组
   * @param {string} url 传入字符串，提取出所有url
   * @param {array} exclude - 可选，需使用请传入数组，数组内为排除的url，即不返回数组内相近的url
   */
  getUrls (url, exclude = []) {
    if (!Array.isArray(exclude)) exclude = [exclude]
    let urls = []
    /** 中文不符合url规范 */
    url = url.replace(/[\u4e00-\u9fa5]/g, '|')
    urls = get_urls(url, {
      exclude,
      /** 去除 WWW */
      stripWWW: false,
      /** 规范化协议 */
      normalizeProtocol: false,
      /** 移除查询参数 */
      removeQueryParameters: false,
      /** 移除唯一斜杠 */
      removeSingleSlash: false,
      /** 查询参数排序 */
      sortQueryParameters: false,
      /** 去除认证信息 */
      stripAuthentication: false,
      /** 去除文本片段 */
      stripTextFragment: false,
      /** 移除末尾斜杠 */
      removeTrailingSlash: false
    })
    return [...urls]
  }

  /**
   * 提取字符串中的url，转为按钮
   * @param {string} msg
   */
  UrlToBut (msg) {
    const message = []
    /** 需要处理的url */
    const urls = this.getUrls(msg)

    urls.forEach(link => {
      message.push(segment.button({ link }))
      msg = msg.replace(link, '[链接(请点击按钮查看)]')
      msg = msg.replace(link.replace(/^http:\/\//g, ''), '[链接(请点击按钮查看)]')
      msg = msg.replace(link.replace(/^https:\/\//g, ''), '[链接(请点击按钮查看)]')
    })
    message.unshift({ type: 'text', text: msg })
    return message
  }

  /**
   * 提取字符串中的url，渲染为图片
   * @param {string} msg
   */
  async UrlToImg (msg) {
    let title = 0
    // 先渲染好所有二维码 稍后处理
    const qr = []
    /** 需要处理的url */
    const urls = this.getUrls(msg)

    for (const link of urls) {
      const text = `[链接(请点击按钮查看 Link ${title})]`
      msg = msg.replace(link, text)
      msg = msg.replace(link.replace(/^http:\/\//g, ''), text)
      msg = msg.replace(link.replace(/^https:\/\//g, ''), text)
      qr.push(await this.QrCode(link, 'Link ' + title++))
    }

    // 这里将所有二维码合并为一张图片
    const images = []
    for (const img of qr) {
      images.push(await Jimp.read(img))
    }
    const height = images.reduce((sum, img) => sum + img.getHeight(), 0)
    const width = Math.max(...images.map(img => img.getWidth()))
    const newImage = new Jimp(width, height, '#ffffff')
    let y = 0
    for (const img of images) {
      newImage.composite(img, 0, y)
      y += img.getHeight()
    }
    let file = await new Promise((resolve, reject) => {
      newImage.getBase64(Jimp.MIME_PNG, (err, base64) => {
        if (err) {
          reject(err)
        } else {
          resolve(base64)
        }
      })
    })
    return [
      { type: 'text', text: msg },
      { type: 'image', file: 'base64://' + file.replace(/^data:image\/(png|jpg|jpeg);base64,/, '') }
    ]
  }

  /**
   * 生成qr码
   * @param {string} text
   * @param {string} title
   */
  async QrCode (text, title) {
    // 生成QR码并将其保存为Buffer
    const qrCodeBuffer = await qrcode.toBuffer(text, {
      type: 'png',
      errorCorrectionLevel: 'H',
      margin: 1,
      color: { dark: '#000', light: '#FFF' }
    })

    // 读取原始图像
    const image = await Jimp.read(qrCodeBuffer)

    // 获取原始图像的宽度和高度
    const width = image.getWidth()
    const height = image.getHeight()

    // 创建一个新的图像，宽度和高度与原始图像相同
    const newImage = new Jimp(width, height + 20, '#ffffff')

    // 设置新增区块的背景颜色为纯白色，不透明
    newImage.background(0xFFFFFFFF)

    // 复制原始图像到新图像的底部
    newImage.composite(image, 0, 20)

    // 添加标题文本
    const font = await Jimp.loadFont(Jimp.FONT_SANS_12_BLACK) // 选择字体和大小
    newImage.print(font, 0, 5, {
      text: title, // 标题文本
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, // 文本水平居中
      alignmentY: 10
    }, width, height + 20)

    // 将新图像转换为Buffer
    const newImg = await new Promise((resolve, reject) => {
      newImage.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (err) {
          reject(err)
        } else {
          resolve(buffer)
        }
      })
    })
    return newImg
  }
}

export default new Common()
