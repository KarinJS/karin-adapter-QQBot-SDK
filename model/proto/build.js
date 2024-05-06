import fs from 'fs'
import { exec } from 'child_process'

console.log('开始编译 .proto 文件...')

const file = './File.js'

const command = `pbjs -t static-module -w es6 --keep-case -p ./kritor/protos -o ${file} ./File.proto`
exec(command, (error, stdout) => {
  if (error) {
    console.error(`编译 .proto 文件时出错：${error.message}`)
    console.error(stdout)
    return
  }
  /** 使用fs解析编译完成的文件 需要替换一些内容... */
  let content = fs.readFileSync(file, 'utf-8')
  content = content.replace('import * as $protobuf from "protobufjs/minimal";', 'import $protobuf from "protobufjs/minimal.js";')
  content = content.replace('const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});', 'const $root = $protobuf.roots || ($protobuf.roots = {})')
  /** 保存写入 */
  fs.writeFileSync(file, content)
  console.log('编译完成')
})
