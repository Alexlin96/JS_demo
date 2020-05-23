/*
 * @Autor: alexlin
 * @Date: 2020-05-21 15:39:42
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-21 16:25:46
 * @Description: 获取url传递的参数值
 */ 

 // 获取URL中的参数名及参数值的集合
 function getRequestParams(url) { // url 不为undefined 则解析url 反正解析当前网址url
  let paramsUrl = '' 
  if (typeof url === 'undefined') {
    paramsUrl = decodeURI(location.search) // decodeURI解码 网址会对url进行编码 需要解码
   } else {
    paramsUrl = `?${url.split('?')[1]}`
   }
   const params = {}
   if (paramsUrl.indexOf('?') !== -1) {
     let newParamsUrl = paramsUrl.substr(1)
     let paramsArr = newParamsUrl.split('&')
     for (let i = 0; i < paramsArr.length; i++) {
      params[paramsArr[i].split('=')[0]] = decodeURI(paramsArr[i].split('=')[1])
     }
   }
   return params
 }

 console.log(getRequestParams('http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明'))
