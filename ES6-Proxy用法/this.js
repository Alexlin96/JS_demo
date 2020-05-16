/*
 * @Autor: alexlin
 * @Date: 2020-03-19 18:24:48
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-03-20 10:42:49
 * @Description: this的问题
 */

 // 在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理
//  const target = {
//   m: function () {
//     console.log(this === proxy);
//   }
// };
// const handler = {};

// const proxy = new Proxy(target, handler);

// target.m() // false
// proxy.m()  // true

// 目标对象的改变会影响 Proxy实例的值
const obj  = {
  'name': 'alex',
  'age': 24
}

let proxy_1 = new Proxy(obj,{ 
  get: (target, key) => {
    console.log('this', this.name)
  },
  set: (target,key,val) => {
    console.log('setThis', this.name) // this指向Proxy 代理
  }
})

// console.log('proxy_1', proxy_1)
proxy_1.name = 'jj'
// obj.name = 'jaychou'

console.log('proxy_2', obj)
// Proxy实例的值改变 不会影响目标对象的值

