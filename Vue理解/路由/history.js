/*
 * @Autor: alexlin
 * @Date: 2020-05-27 17:28:08
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-27 18:46:12
 * @Description: history模式
 */ 

let app =  document.getElementById('app')

function RouterClass() {
  this.routes = {}
  this.curUrl = '' // 初始化url
  this.eventHashRouter()
}

RouterClass.prototype.route = function(path, callback) { // url 回调函数
  this.routes[path] = callback || function(){}
 }

// 监听history模式
RouterClass.prototype.eventHistoryRouter = function() {
  window.addEventListener("load", this.historyRouter.bind(this));
  // 监听回退事件  打个比方：就是你点浏览器那个返回的箭头按钮时触发的事件
  window.addEventListener("popstate", this.historyRouter.bind(this));
}

// history模式
RouterClass.prototype.historyRouter = function() {
  this.curUrl = window.location.pathname;
  this.routes[this.curUrl]();
}

// push模式页面跳转
RouterClass.prototype.push = function(url) {
  window.history.pushState({},null,url); // HTML5新引入的 添加记录条目
  this.routes[url]();
}
//replace模式页面跳转
RouterClass.prototype.replace = function(url) {
  window.history.replaceState({},null,url); // HTML5新引入的 修改记录条目
  this.routes[url]();
}


var Router = new RouterClass() //初始化 使用
const baseUrl = 'https://www.linzhiqiang96.com'

// 构造一个函数，根据url 改变 #app 中的内容，对页面进行渲染
Router.route(baseUrl + '/', function() {
 app.innerHTML="首页"
})
Router.route(baseUrl + '/news', function() {
 app.innerHTML="新闻页面"
})
Router.route(baseUrl + '/product', function() {
 app.innerHTML="产品页面"
})
