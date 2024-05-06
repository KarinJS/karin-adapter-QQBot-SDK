import { basename, dirPath } from './model/dir.js'
import Config from './lib/config/config.js'
import QQBot from './lib/api/api.js'

export { dirPath }

logger.info(basename + ' 插件 0.0.1初始化~')

for (let bot of Config.QQBot) {
  new QQBot(bot).init()
}
