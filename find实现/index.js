Array.prototype.myfind = function(callback) { // 这里不能用箭头函数 只能用普通函数 此时this指向这个数组
    for(var i=0;i < this.length;i++){
        if(callback(this[i])){  // true代码符合
            return this[i];
        }
    }
    
};
Array.prototype.myfindindex = function(callback) {
    for(var i=0;i < this.length;i++){
        if(callback(this[i],i,this)){
            return i;
        }
    }
    return -1;
};
//测试
var arr = [1,2,7,8,34,2,15,8];
var v = arr.myfind((value,index,arr) => {
    return value > 10;
});
console.log('v='+v);//v=34
// var i = arr.myfindindex((value,index,arr) => {
//     return value > 3;
// });
// console.log('i='+i);//i=2