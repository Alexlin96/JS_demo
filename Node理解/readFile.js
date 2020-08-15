const fs = require('fs')

// 异步版本
var data = fs.readFile('test.txt', (err,data) => {
  console.log('读取成功')
  console.log(data.toString())
})
console.log("程序执行结束!")

// 同步版本
var data_1 = fs.readFileSync('test.txt');
console.log(data_1.toString())