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

// null是基本类型，updateObj = null之后只是把a存储在栈内存中地址改变成了基本类型null，并不会影响堆内存中的对象，所以testObj的值不受影响