/*
 * @Autor: alexlin
 * @Date: 2020-03-18 14:27:01
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-22 17:55:02
 * @Description: 
 */ 
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");
function foo(params) {
    console.log("First");
}
function bar(params) {
    setTimeout(() => console.log("Second"));
}
function baz(params) {
    console.log("Third");
}

function test(params) {
    
bar();
foo();
baz();
}
test()
// bar();
// foo();
// baz();


// ---------------------------------------------------------------------------
// setTimeout(()=>{
//     task();
// },3000)
// sleep(10000000)

/*
task()进入event table注册，计时开始
先执行sleep函数，很慢,非常慢，计时仍在继续
3秒到了，计时事件完成 task() 进入 event queue 但此时不能执行，因为sleep（）还没执行完，只好等着
sleep执行完了，task()终于从Event Queue进入了主线程执行。
*/  
// setTimeout这个函数，是经过指定时间后，把要执行的任务(本例中为task())加入到Event Queue中，

setTimeout(fn,0) // 含义是指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。
// setTimeout要补充的是，即便主线程为空，0毫秒实际上也是达不到的。根据HTML的标准，最低是4毫秒。





