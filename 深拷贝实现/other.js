
// 深拷贝
function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') return obj;
    let t ; // 用来存当前方法拷贝的对象
    if(Object.prototype.toString.call(obj) === '[object Array]'){
        t = [];
        obj.forEach((item)=>{
            t.push(deepClone(item))
        })
    }else if(Object.prototype.toString.call(obj) === '[object Object]'){
        t = {};
        for(let i in obj){
            t[i] = deepClone(obj[i])
        }
    }
    return t;
}

let res = deepClone({
    'name':'alex',
    'age':{'year':'23'},
    'from':[1,2,3]
})

console.log(res)