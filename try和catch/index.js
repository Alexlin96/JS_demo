// 同步情况
function readerr(type) {
    if(type == 'err'){
        throw new Error('我是错误的');
    }else{
        console.log('无问题');
    }
}
try {
    readerr('err');
} catch (error) {
    console.log(error);
}

// 异步情况 回调函数

function backFn() {
    try {
        setTimeout(readerr('err'),200);    // 无法捕获回调里面的错误
    } catch (error) {
        console.log(error);
    }
}

function p1() {
    return new Promise((resolve,reject)=>{
        try {
            reject('p1成功');
        } catch (error) {
            console.log('error')   // 捕获不到
        }
    })
}
p1()

// 总结：try...catch是被设计成捕获当前执行环境的异常，意思是只能捕获同步代码里面的异常，异步调用里面的异常无法捕获。