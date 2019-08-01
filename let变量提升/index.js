let x = 'alex';
function demo() {
    console.log('第一次的x',x);  // let的创建过程被提升了 但初始化没有提升 所以报错
    let x = 'kay';  // 局部变量
    this.x = '555'
    console.log('第二次的x',x)
}
demo();
console.log('最后的x',x);


var x = 'alex';
function demo() {
    console.log('第一次的x',x);  // x 变量提升了 此时初始化为undefined 所以打印undefined
    var x = 'kay';  // 局部变量
    console.log('第二次的x',x)
}
demo();
console.log('最后的x',x);
