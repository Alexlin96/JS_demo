// class 相当于构造函数的语法糖 让对象原型的写法更加清晰。

// 构造函数写法
function Queue(contents = []) {
    this._queue = [...contents];
}
Queue.prototype.pop = function () {   // Queue原型链添加一个属性pop
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
}
let new_Queue = new Queue([1,2,3]);


// class写法
class Queue{
    constructor(contents = []){  // 构造方法 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
        this._queue = [...contents];   // constructor方法默认返回实例对象（即this）
    }
    pop(){  // 添加pop方法
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value; 
    }
}
let newClass_Queue = new Queue([1,2,3]); // 类必须使用new调用，否则会报错
Object.keys(Queue.prototype) // 输出[]  类内部所有定义的方法 都是不可枚举的
Object.getOwnPropertyNames(Queue.prototype)  // 这个可以打印出Queue里面所有的方法 包括constructor

// ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
newClass_Queue.hasOwnProperty('_queue')  // true 
newClass_Queue.hasOwnProperty('pop')   // false

newClass_Queue.__proto__.hasOwnProperty('pop')  //在原型上找就可以找到这个属性

/*
class不存在变量提升
name属性  Queue.name ===> Queue
Generator 如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
继承 类相当于实例的原型，所有在类中定义的方法，都会被实例继承
*/


// static  方法前面加上这个 这个方法不会被继承
class Foo{
    static classMethod(){
        console.log('我不会被继承')
    }
    baseMethod(){
        console.log('我可以被继承')
    }
}
Foo.classMethod()  // 我不会被继承
let foo  =new Foo(); foo.classMethod()  // 报错 未定义   
foo.baseMethod()  // 我可以被继承

// 父类的静态方法，可以被子类继承。 无论加没加static
class Foo {
    static classMethod() {
      return 'hello';
    }
  }
  class Bar extends Foo {
    static classMethod() {
      return super.classMethod() + ', too';
    }
  }
  
  Bar.classMethod() // "hello, too"

// class实例属性定义在类的最顶层 可以不用this
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

// Class 内部调用new.target，返回当前 Class。
// 子类继承父类时，new.target会返回子类。








