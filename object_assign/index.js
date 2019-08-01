let obj = {
    'name':'alex',
    'age':23,
    'phone':13198914422
}
let souceObj = {
    'name':'alex',
    'age':24,
    'phone':13198914422
}
let resultObj = Object.assign({},obj,souceObj,{'name':'jj'})              //Object.assign() 需要2个以上的参数 第一个为目标对象，后面的是来源对象
//相同key情况下 后面的覆盖前面的结果
console.log('结果',resultObj);