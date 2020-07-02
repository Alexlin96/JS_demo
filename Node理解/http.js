const http = require('http') // 引入http模块

http.createServer((request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/plain'})

  response.end(decodeURIComponent('http 页面6666'))
}).listen(10010)

console.log('运行http中')

