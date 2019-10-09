Function.prototype.mycall = (context = window)=>{ // context 上下文环境
    if(typeof this !== 'function'){
        throw new Error('错误');
    }

    context.fn = this;

    const args = [...arguments].slice(1) //参数剥离 第一个是上下文环境 所以要去除

    const res = context.fn(...args); // 执行函数

    delete context.fn;
    
    return res;
}