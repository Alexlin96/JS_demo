// 模拟 instanceof
function instance_of(L, R) { // L相当于实例  R相当于构造函数
    //L 表示左表达式，R 表示右表达式
    var O = R.prototype; // 取 R 的显示原型
    L = L.__proto__; // 取 L 的隐式原型
    while (true) {
      if (L === null) return false;
      if (O === L)
        // 这里重点：当 O 严格等于 L 时，返回 true
        return true;
      L = L.__proto__;
    }
  }

  // instanceof 用于判断对象是否是某个构造函数的实例
  function instance_of_1(obj, func) {
    while(obj) {
      if (obj.__proto__ === null) return false // 找到最顶层原型对象 还是没匹配
      if (obj.__proto__ === func.prototype) return true // 找到
      obj = obj.__proto__  // 原型上的原型 原型链
    }
  }

  // 原型链：构造函数、实例、原型对象，其中构造函数.prototype === 原型对象，实例.__proto__ === 原型对象，最顶层的原型对象是Object.prototype，Object.prototype.__proto__ === null

  let res = instance_of_1([1,0,3],Array)
  console.log('res',res)
