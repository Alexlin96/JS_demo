// let obj ={'name':'alex'}
// let txs = {};
// // function test(obj={}) {    //obj gx 

// //     txs = obj; // 
// //     obj = Object.assign({}); 
// //     // txs = {};

// // }

// txs = obj; //引用还是共享
// // 对象的实体放在堆当中 ，引用地址放在栈内
// txs['age'] = 23  // 这个时候没有改变原来的地址 所有会影响到对象
// //txs = {};  // 这个直接把一个空对象赋给txs 此时txs的地址发生改变 与obj断掉联系 所有不会影响到obj对象的值



// console.log('obj1',obj);
// console.log('obj2',txs);

// function foo_1(a, b, c) {
//   c = 10
//   console.log(arguments)
// }


// function foo_2(a, b, c = 5) {
//   c = 10
//   console.log(arguments)
// }
// foo_2(1,2,3)

// function side(arr) {
//   console.log(arr[2])
//   arr[0] = arr[2];

// }
// function a(a, b, c = 3) {
//   c = 10;
//   // side([a,b,c]);  // 这里 a，c的值不管怎么改变都是不会改变的
//   // console.log(arguments)
//   // console.log([a,b,c])
//   return a + b + c;
// }

// console.log(a(1,1,1))

function foo() {
  console.log(a)
}
foo()

var a = 123