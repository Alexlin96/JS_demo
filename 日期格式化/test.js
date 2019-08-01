//测试调用

const dateFn = require('./index.js')   //commonjs

var time1 = dateFn.formatDate(new Date(),"yyyy-MM-dd")
console.log('time1',time1)