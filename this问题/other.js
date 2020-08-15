var a = "alex";

function demo() {
  this.a = 5566;
  let obj = {
    a: "jay",
    say: () => {
      console.log("this", this.a);
    }
  };
  obj.say();
}
demo();

// this指向代码
let name = "alex";

let a = {
  name: "jay",
  b: function() {
    console.log("name", this.name);
    return "666";
  },
  c: () => {
    console.log("C-name", this.name);
    return "666";
  },
  d: function() {
    (() => {
      console.log("D-name", this.name);
      return "666";
    })();
  }
};
a.b(); // 普通函数this指向调用者a 所以输出 jay
a.c(); // 箭头函数this指向上一层不是箭头函数的定义着所在的this 此时是全局 widow的this是undefined
a.d(); // 箭头函数其实是没有 this 的，这个函数中的 this 只取决于他外面的第一个不是箭头函数的函数的 this 此时是d函数 d函数this指向对象a
//箭头函数其实是没有 this 的,它的this继承于上一层代码块的this

let b = () => {
  console.log("name", this.name);
};
b();
