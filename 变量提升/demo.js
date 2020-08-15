
// let c = {'o': '2'}
// let a = {
//   b: (() => {
//     console.log('访问b')
//     return c
//   })(),
//   t: 1
// }
// console.log(a.b)
// console.log(c)

// var a = 123
// function foo() {
//   console.log('a',a)
//   let b = 10
// }

// foo()

new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  },3000)
}).then(()=>{
  console.log(77777)
})

setTimeout(()=>{
  console.log(1111)
},3000)

setTimeout(()=>{
  console.log(2222)
},2000)

setTimeout(()=>{
  console.log(3333)
},4000)