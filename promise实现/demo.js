/*
 * @Autor: alexlin
 * @Date: 2020-06-02 19:47:45
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-06-02 19:49:54
 * @Description: 
 */ 

 class A {
   constructor(fn) {
     this.fn = fn
     this.fn(this.cb())
   }
   cb() {
     console.log(this)
   }
 }

 new A((cb)=>{ cb() })