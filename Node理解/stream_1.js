/*
 * @Autor: alexlin
 * @Date: 2020-07-01 16:38:54
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-01 16:50:26
 * @Description: 读取流
 */ 
const fs = require('fs')

let data = ''

// 创建可读流 
let readerStream = fs.createReadStream('test.txt')

// 设置编码为utf-8
readerStream.setEncoding('UTF8')

// 处理流事件
readerStream.on('data', (chunk) => {
  data += chunk
})

// 结束
readerStream.on('end', () => {
  console.log('data', data)
})

// 错误
readerStream.on('error', (err) => {
  console.log(err.stack)
})

console.log('执行完成')


