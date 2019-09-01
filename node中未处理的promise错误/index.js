process.on('unhandledRejection',res=>{
    console.log('错误',res)
})
function foo() {
    Promise.reject('hello bug')
}

foo()