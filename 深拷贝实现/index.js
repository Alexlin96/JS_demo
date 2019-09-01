/*
 * @Author: Alexlin 
 * @Date: 2019-08-26 05:19:39 
 * @Last Modified by: Alexlin
 * @Last Modified time: 2019-08-26 05:20:00
 */

/*
如果是基本数据类型，直接返回
如果是 RegExp 或者 Date 类型，返回对应类型
如果是复杂数据类型，递归。
考虑循环引用的问题
*/

// 用到ES6
function deepClone(obj,hash = new WeakMap()) {
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(obj === null || typeof obj !== 'object') return obj;
    if(hash.has(obj)) return hash.get(obj);
    // 如果obj是数组，那么 obj.constructor是[Function Array]
    // 如果obj是对象，那么 obj.constructor是[Function Object]
    let t = new obj.constructor();
    hash.set(onj,t)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            t[key] = deepClone(obj[key],hash);
        }
    }
    return t;
}
let cloneData =  deepClone([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]);
console.log('cloneData',cloneData);


