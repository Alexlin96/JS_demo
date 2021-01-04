(function () {
  function demo_var() {
    for (var i = 0; i < 10; i++) {
      // 此时 i 是当前函数的变量 可以在当前函数作用域访问到
      //
    }
    console.log(i);
  }
  //demo_var()

  function demo_let() {
    for (let i = 0; i < 10; i++) {
      // 此时 i是块级作用域的变量 在外部是访问不到的
      //
    }
    let i = 100;
    console.log(i); // i is not defined
  }

  demo_let();
})();
