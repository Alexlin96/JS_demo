// class 继承 extends
class Point {
    constructor(){
        this.x = 100;
        this.y = 200;
        this.color = 'red';
    }
    findxy(){
        console.log('x和y',this.x,this.y);
    }
}
class ColorPoint extends Point {  // 方法和属性默认全部继承过来
    constructor(x,y,color){
        //this.y = 500;  // 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
        super(x,y,color) // 调用父类的constructor 用来新建父类的this对象 完成塑造子类自己的this对象
        this.y = 500;  // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
    }
    getColor(){
        console.log('color',this.color);
    }
}
new ColorPoint().getColor();
new ColorPoint().findxy()
console.log('比较',new Point() == new ColorPoint())   // false

// 父类的静态方法也会被子类继承
class A {
    static hello() {
      console.log('hello world');
    }
  }
  
  class B extends A {
  }
  
  B.hello()  // hello world

// Object.getPrototypeOf()
Object.getPrototypeOf(ColorPoint) === Point; // true  可以用来判断一个类是否继承了另外一个类

// super() 相当于A.prototype.constructor.call(this) 作为函数时，只能用在子类的构造函数之中，用在其他地方就会报错。
















