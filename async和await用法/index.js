// async函数是Generator 函数的语法糖。

// async函数返回一个 Promise 对象，可以使用then方法添加回调函数。

const _Async = async (arr)=>{ // 返回promise对象
    let result  = await getSumResult(arr);  // 遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
    console.log('计算结果出来',result)
    // throw new Error('我是错的')
    return result; // async函数内部return语句返回的值，会成为then方法回调函数的参数。

}
function getSumResult (arr){
    return new Promise((resolve,reject)=>{
        let res = arr.reduce((a,b)=>{
            return a+b;
        })
        setTimeout(()=>{
            resolve(res);
        },2000)
        
    })  
}

_Async([3,4,5,6]).then((res)=>{
    console.log('最后的结果',res);
}).catch((err)=>{
    console.log(err)
})

// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

/*------------------------------------- */



