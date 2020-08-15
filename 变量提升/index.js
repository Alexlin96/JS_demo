var a = () => {
  console.log('666666')
}

function a() {
  console.log('77777')
}

a()

// 变量和函数提升 相当于
var a;
function a() {
  console.log('77777')
}

a = () => {
  console.log('666666')
}

//  变量作用域 a此时是全局变量 
function foo() {
  console.log(a)
}
var a = 222
foo()