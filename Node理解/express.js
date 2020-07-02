/*
 * @Autor: alexlin
 * @Date: 2020-07-02 15:33:03
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-07-02 15:33:17
 * @Description: express实例
 */ 

let express = require('express')
let app = express()

app.get('/', (req, res) => {
 res.send('express app')
 res.end()
}).listen(8077)