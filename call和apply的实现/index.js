// call 实现
Function.prototype.myCall =  function (context) {
  // 判断当前this是不是个函数
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  
  // 当前上下文环境
  let context = context || window

  // 将这个函数赋值给当前上下文的某个属性
  context.fn = this

  // 取参数
  let args = [...arguments].slice(1)

  let result = context.fn(...args)

  // 删除
  delete context.fn

  return result
}


// apply 实现
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }

  let context = context || window

  context.fn = this

  let args = [...arguments[1]]

  let result = context.fn(...args)

  delete context.fn

  return result
}
