function _newThis() {
    [this.name,this.age] = [...arguments];
    console.log(this);
}
function _newFunction (){
    [this.name,this.age] = [...arguments];
    console.log(this);
}
let newThis = new _newThis('alex','23');  // this指向实例对象
let newFunction = _newFunction.call(newThis,'alex','2324')   // call 一个一个参数传  apply 参数传数组