let obj ={'name':'alex'}
let txs = {};
// function test(obj={}) {    //obj gx 

//     txs = obj; // 
//     obj = Object.assign({}); 
//     // txs = {};

// }

txs = obj; //引用还是共享
txs = {};



console.log('obj1',obj);
test(
    
    
);
console.log('obj2',txs);