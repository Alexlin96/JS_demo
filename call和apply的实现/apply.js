Function.prototype.myapply = (context = window)=>{
    if(typeof this != 'function'){
        throw new Error('error');
    }

    context.fn = this;

    let res;

    if(arguments[1]){
        res = context.fn(...arguments[1])
    }else{
        context.fn();
    }

    delete context.fn;

    return res;
}