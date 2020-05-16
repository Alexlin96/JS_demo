// this指向的三种情况
/*
1.obj.fun()   fun中的this指向obj 自动指向当前的对象
2.new Fun()  构造函数实例化 new改变了函数内部的this执行，导致this指向实例化new的对象
3.fun()匿名函数回调  this默认指向window
*/
// 例子 回调函数中this的指向
var Bob = {
    name:'alex',
    friends:["Jack","Rose","Tom","Jerry"],
    intr(){
        this.friends.forEach(function (item) {
            console.log(this.name + 'know' + item)
        })
    }
}
Bob.intr()
// 这里的回调函数中的this默认是指向window的，本质上在函数内回调 没有对象来进行调用 

// 例子 回调函数用箭头函数来表示
// var Bob = {
//     name:'alex',
//     friends:["Jack","Rose","Tom","Jerry"],
//     intr(){
//         this.friends.forEach((item)=>{
//             console.log(this.name + 'know' + item)
//         })
//     }
// }
// Bob.intr()
// 箭头函数this指向定义时所在的对象，所以这个时候指向Bob

var person={
    age:20,
    getAge(){
        ( () => {
            console.log('this.age', this.age) // 箭头函数this指向定义时所在的对象，所以这个时候指向person
        })()
        return this.age;
     },
 };
 person.getAge(); // 20
