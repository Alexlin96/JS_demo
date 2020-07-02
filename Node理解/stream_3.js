/*
 * @Autor: alexlin
 * @Date: 2020-07-01 17:02:35
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-01 17:06:08
 * @Description: 管道流
 */ 

const fs = require('fs')

// 可读流
const readerStream = fs.createReadStream('test.txt')

// 可写流
const writerStream = fs.createWriteStream('test_1.txt')

// 管道读写操作
readerStream.pipe(writerStream)

console.log('执行完毕')

