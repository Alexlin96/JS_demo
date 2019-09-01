let obj ={'name':'alex'}
let txs = {};
// function test(obj={}) {    //obj gx 

//     txs = obj; // 
//     obj = Object.assign({}); 
//     // txs = {};

// }

txs = obj; //引用还是共享
// 对象的实体放在堆当中 ，引用地址放在栈内
txs['age'] = 23  // 这个时候没有改变原来的地址 所有会影响到对象
//txs = {};  // 这个直接把一个空对象赋给txs 此时txs的地址发生改变 与obj断掉联系 所有不会影响到obj对象的值



console.log('obj1',obj);
console.log('obj2',txs);