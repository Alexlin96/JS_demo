/*
 * @Autor: alexlin
 * @Date: 2020-03-19 15:33:21
 * @LastEditTime: 2020-03-19 19:18:20
 * @Description: ES6-Proxy用法
 */
// Proxy ==> 代理
// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

// var proxy = new Proxy(target, handler) // target 表示所要拦截的目标对象 handler参数也是一个对象，用来定制拦截行为

/* 例子
  var proxy = new Proxy({}, {
    get: (target, propKey)=>{
      return 35;
    }
  })
  proxy.time // 35
  proxy.name // 35
  proxy.title // 35

  get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回35，所以访问任何属性都得到35
*/

// var proxy_1 = new Proxy(target = {}, handler = {} );
// proxy_1.name = 'alex'
// console.log('proxy_1', target.name) // handler是一个空对象，没有任何拦截效果，访问proxy就等同于访问target。

// proxy实例可以作为其他对象的原型对象
// var proxy_2 = new Proxy({},{
//   get: (target, propKey) => {
//     return  36
//   }
// })
// let obj = (Object.prototype.proxy = proxy_2)
// console.log('proxy_2', obj.time)

/* 
  同一个拦截器函数，可以设置拦截多个操作
*/
// var proxy_3 = new Proxy((x, y)=>{
//   return x + y
// },{
//   get: (target, propKey) => { // 拦截对象属性的读取 接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象）
//     console.log('target', target)
//     console.log('propKey', propKey)
//     if (propKey === 'prototype') {
//       return Object.prototype
//     }
//     return 'name' + propKey 
//   },
//   apply: (target, thisBinding, args) => {
//     return args[0]
//   },
//   construct: (target, args) => {
//     return {value: args[1]}
//   }
// })
// proxy_3(1, 2) // 1
// console.log('get', proxy_3.prototype.name = 'alex' )

// get() 方法 // 拦截对象属性的读取 接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象）
// var person = {
//   name: 'alex'
// }
// var proxy_4 = new Proxy(person, {
//   get: (target, propKey, receiver) => {
//     if (target.hasOwnProperty(propKey)) {
//       console.log('receiver', receiver)
//       return target[propKey]
//     } else {
//       throw new Error(`报错`)
//     }
//   }
// })
// proxy_4.name // alex
// proxy_4.age // 抛出一个错误
// 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错


// set() 用来拦截某个属性的赋值操作 4个参数 目标对象、属性名、属性值、Proxy实例本身(可选)
// var proxy_5 = new Proxy({}, {
//   set: (obj, key, val) => {
//     if(key === 'num') {
//       if(val > 100) {
//         throw new Error(`大于100报错`)
//       }
//     }
//     obj[key] = vel
//   }
// })
// proxy_5.num = 200
// 利用set方法 可以实现数据验证
// 目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用

// apply() 拦截函数的调用、call和apply操作 三个参数： 目标对象、目标对象的上下文(this)、目标对象的参数数组
// var proxy_6 = new Proxy(()=>{
//   console.log('初始化')
// },{
//   apply: () => {
//     console.log('我要执行了')
//   }
// })
// proxy_6()

// has() 拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。 
// 两个参数 ： 目标对象、需查询的属性名
// has方法不判断一个属性是对象自身的属性，还是继承的属性
// var proxy_7 = new Proxy({
//   name: 'alex'
// },{
//   has: () => {
//     console.log('触发判断')
//   }
// })
// proxy_7.name
// 'name' in proxy_7 // 触发has
// for (let a in proxy_7) {
//   console.log('data', proxy_7[a])
// }
 // for...in循环也用到了in运算符，但是has拦截对for...in循环不生效

// construct() 用于拦截new命令 三个参数 目标对象、构造函数的参数对象、创造实例对象时，new命令作用的构造函数
// var proxy_8 = new Proxy(function () {},{
//   construct: (target, argumentsList) => {
//     return {'name': 'alex'} // construct方法返回的必须是一个对象，否则会报错
//   }
// })
// new proxy_8()

// deleteProperty() 用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
// 两个参数 目标对象 key值
// var proxy_9 = new Proxy({'name' : 'alex', 'age': 24},{
//   deleteProperty: (target, key) => {
//     if (key === 'name') {
//       throw new Error(`Invalid attempt to private "${key}" property`)
//     } else {
//       delete target[key]
//     }
//   }
// })
// delete proxy_9.name // 报错
// delete proxy_9.age // 正常删除

// getOwnPropertyDescriptor() 拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
// 两个参数 目标对象 key值


// getPrototypeOf()  主要用来拦截获取对象原型

// isExtensible() 拦截Object.isExtensible操作

// ownKeys() 用来拦截对象自身属性的读取操作
/*
  Object.getOwnPropertyNames()
  Object.getOwnPropertySymbols()
  Object.keys()
  for...in循环
*/
// let proxy_10 = new Proxy({'name':'alex', 'age': 24}, {
//   ownKeys(target) {
//     console.log('触发')
//     return ['a'];
//   }
// })
// Object.keys(proxy_10)

// preventExtensions() 拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值

// setPrototypeOf() 用来拦截Object.setPrototypeOf方法
 
// Proxy.revocable()  返回一个可取消的 Proxy 实例
let { proxy, revoke } = Proxy.revocable({},{})
proxy.name = 'jay'
revoke() // 取消下次访问不到了
proxy.age
// Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问