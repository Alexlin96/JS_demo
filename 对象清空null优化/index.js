let testObj = {
    'name':'alex',
    'age':'23',
    'from':'china'
}
function nullOption() {
    let updateObj = testObj;
    updateObj['from'] = 'hainan'
    console.log('updateObj',updateObj)  
    console.log('testObj',testObj)
    updateObj = null;   // 对象赋值为空只会影响当前对象  不会影响其引用的上一个对象（testObj）
    console.log('updateObj',updateObj) // null
}
nullOption()
console.log('结果testObj',testObj)  // 这里不会为null