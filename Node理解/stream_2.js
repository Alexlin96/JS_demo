/*
 * @Autor: alexlin
 * @Date: 2020-07-01 16:50:02
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-01 16:55:48
 * @Description: 写入流
 */ 

const fs = require('fs')

let data = '我是写入流 6666'

// 创建写入流
let writerStream = fs.createWriteStream('test.txt')

//  使用utf8编码写入数据
writerStream.write(data, 'UTF8')

// 标记文件末尾
writerStream.end()

// 处理流事件
writerStream.on('finish', () => {
  console.log('写入完成')
})

writerStream.on('error', (err) => {
  console.log('err', err.stack)
})

console.log('执行完成')