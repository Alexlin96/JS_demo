/*
 * @Autor: alexlin
 * @Date: 2020-07-02 14:40:56
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-02 16:02:52
 * @Description: get和post请求
 */ 


// 获取get请求内容
let http = require('http')
let url = require('url')

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/plain'})

  // 解析url参数
  let params = url.parse(req.url, true).query

  res.write('名称:', params.name, '\n')
  res.write('url:', params.url)
  res.end()
}).listen(3500)


// 获取post请求内容
let http = require('http')
let queryString = require('queryString')
let util = require('util')

http.createServer((req, res) => {
  // 存放请求信息
  let post = ''

  // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
  req.on('data', (chunk) => {
    post += chunk
  })

  req.on('end', () => {
    post = queryString.parse(post)
    res.end(util.inspect(post))
  })
}).listen(3600)