/*
实现原理：
    （1）创建一个空对象，构造函数中的this指向这个空对象；
    （2）这个新对象被执行【【原型】】连接，让空对象的__proto__（IE没有该属性）成员指向了构造函数的prototype成员对象；
    （3）执行构造函数方法，属性和方法被添加到this引用的对象中；
    （4）如果构造函数中没有返回其它对象，那么返回this，即创建的这个新对象，否则，返回构造函数中返回的对象。
*/

function _new(Foo) {
    let newObj = {};  // 创建新对象

    newObj.__proto__ = Foo.prototype;  // 空对象的__proto__ 指向构造函数的prototype成员对象 即原型对象 相当于是一种连接操作

    Foo.apply(newObj,arguments)   //绑定this指向newObj 属性和方法被添加到this引用的对象中
    
    return newObj;   // 返回对象
}
