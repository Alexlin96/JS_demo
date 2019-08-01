
//toString的方法进行降维
function flat1(arr) {
   return arr.toString().split(',').map(Number);
}
//flat() 进行降维 要知道最大深度 node环境下不能使用
// function flat2(arr) {
//     let result = arr.flat(4);
//     return result;
// }
// [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10].flat(Infinity)
//console.log([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10].toString().split(',').map(Number))
//console.log(flat1([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]));
//console.log(flat2([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]));

function reduceArr(params,flatArr = []) {
    for(let i =0 ; i < params.length ; i++){
        if(Object.prototype.toString.call(params[i]) == '[object Array]'){
            reduceArr(params[i],flatArr);  // 递归
        }else{
            flatArr.push(params[i])
        }
    }
    return flatArr;
}
