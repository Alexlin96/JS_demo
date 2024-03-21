function func() {
  this.name = '123'
}
// 在对象里 undefined和function会被忽悠掉
const a = {
  name: undefined,
  func
}
console.log(JSON.stringify(a)) // 输出{}

// 在数组里 undefined和function会被转化成null
const b = [0, undefined, func, 2]
console.log(JSON.stringify(b)) // 输出[0,null,null,2]

// 单独转化 undefined和function会被转化成undefined
const c = undefined
const d = func
console.log(JSON.stringify(c)) // 输出undefined
console.log(JSON.stringify(d)) // 输出undefined