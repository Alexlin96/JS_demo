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
  let res = instance_of([1,0,3],Array)
  console.log('res',res)
