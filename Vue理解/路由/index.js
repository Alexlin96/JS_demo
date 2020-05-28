/*
 * @Autor: alexlin
 * @Date: 2020-05-27 14:17:26
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-27 17:39:35
 * @Description: 路由原理
 */ 

// Hash模式
// 概念：Hash 方法是在路由中带有一个 #，主要原理是通过监听 # 后的 URL 路径标识符的更改而触发的浏览器 hashchange 事件，然后通过获取 location.hash 得到当前的路径标识符，再进行一些路由跳转的操作

// 使用hashchange
// 第一种
window.addEventListener('hashchange', function() {
  console.log('The hash has changed!')
}, false);

// 第二种
function locationHashChanged() { 
  if (location.hash === '#cool-feature') { 
    console.log("You're visiting a cool feature!"); 
  } 
} 
window.onhashchange = locationHashChanged;


// history模式
// 没有#

