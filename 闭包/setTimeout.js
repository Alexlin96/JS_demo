// 闭包保存外部函数的值
const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(i_local){
//     return function () {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000)  // i 当做参数的形式传进来 i得以保留对应的值
// }

for(var i = 0; i < arr.length; i++){
  setTimeout(()=>{ // setTimeout 被挂起到宏事件队列里 
    console.log('i',i)
  }) 
}
new Promise(resolve=>{
  console.log('22222',i)
  resolve('3333')
}).then((res)=>{
  console.log('over',res)
})