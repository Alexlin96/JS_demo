const demo = async () =>{
    await setTimeout(()=>{
        console.log('我延迟一秒');
    },1000)
    console.log('先不执行，等一下')
    return 1;
}

demo().then((res)=>{
    console.log('输出',res);
})