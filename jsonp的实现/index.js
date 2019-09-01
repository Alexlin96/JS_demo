// JSONP 实现
function jsonp({url,params,callback}) {
    return new Promise((resolve,reject)=>{
        // 创建script标签
        let script = document.createElement('script');

        // 将回调函数挂在window上
        window[callback] = function (data) { // callback回调执行
            resolve(data); // 返回data

            delete window[callback];
            // 代码执行后，删除插入的script标签
            document.body.removeChild(script);
        }

        // 组合请求URL
        let requestUrl = url + `?callback=${callback}` ;
        for(let key in params){
            requestUrl += `&${key}=${params[key]}`;
        }
        script.src = requestUrl;

        // 将script节点添加到body
        document.body.appendChild(script);
        
    })
}

// 调用
jsonp({
    url:'https://api.asilu.com/geo/',
    params:{
        //code
    },
    callback:'show'
}).then((data)=>{
    console.log(data)   // 进行数据处理
})




