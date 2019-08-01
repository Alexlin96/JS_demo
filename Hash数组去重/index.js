// hash 数组去重
function distinct(arr) {
    let len = arr.length,
    hash = {}, myArr = [];
    //对象属性开关门
    for(let i =0;i<len;i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = true;
            myArr.push(arr[i])
        }
    }

    return myArr
    
}
console.log(distinct([1,2,3,2])); 




// function memoize(fn){
//     function memoizeFn(...args){
//         const cache = memoizeFn.cache;
//         const key = JSON.stringify(args);

//         if (cache[key] == undefined) {
//             cache[key] = fn.apply(this, args);
//             return cache[key];
//         }

//         return cache[key];
//     }

//     memoizeFn.cache = {};
//     return memoizeFn;
// }

// function calBigNum(limit){
//     let res = 0;
//     for (let i=0; i<limit; i++) res++;
//     return res;
// }


// const calBigNum_m = memoize(calBigNum);

// [1000000000, 5, 2000000000, 1000000000].forEach(val => {
//     console.log(calBigNum_m(val))
// })


// let a = 10;
// if(a>1){
//     console.log('大于');
// }else if(a>3){
//     console.log('大于3');
// }else if(a>5){
//     console.log('大于5');
// }