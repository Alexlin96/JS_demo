// 以axios举例

// 外部this指针暂存
var _self = this  // 防止this指针的丢失 保存一下
this.$http.get(`/xxx`).then(function (res) {
  // 此处this指针丢失，需要使用暂存的_self 此时指向这个回调函数 但没定义 所以这个this是undefined 
  if (res.data.rc === 0) {
    // 操作
  } else {
    // 异常处理
  }
}).catch(error => {
  console.info(error)
})

// 使用箭头函数则this指针仍然可用
this.$http.get(`/xxx`).then(res => {
  // 箭头函数内部的this指针指向 **外层this**
  if (res.data.rc === 0) {
    // 操作
  } else {
    // 异常处理
  }
}).catch(error => {
  console.info(error)
})

