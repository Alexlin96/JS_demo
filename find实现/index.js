Array.prototype.findOpt = function(fn) {  //必须使用function不能使用箭头函数，this指向调用的数组 fn回调函数
  console.log('this', this)
  for(let i = 0; i < this.length; i++) {
    if(fn(this[i])) { // 存在匹配 返回第一个
      return this[i]
    }
  }
  return undefined
}

let arr = [1,2,3,4,5]

let res = arr.findOpt(item => item > 2)

console.log('结果', res)