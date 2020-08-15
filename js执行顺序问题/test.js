// setTimeout(()=>{
//     console.log(111)
// },0)
// setTimeout(()=>{
//     console.log(222)
// },1)
// setTimeout(()=>{
//     console.log(333)
// },0)


function newObject() {
    let obj = {
        'name' :'alex',
        'age' : '23'
    };
    cloneObject(obj)
    console.log('newobj',obj)

}
function cloneObject(obj){
    let params = {
        'data': '我是data',
        'length' :'five'
    }
    obj['data'] = '我是alex'
    obj = params
    // obj = Object.assign(obj,params);
    console.log('obj',obj)
};
newObject()

// 遇到函数执行的时候，就会创建一个执行上下文