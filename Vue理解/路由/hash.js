/*
 * @Autor: alexlin
 * @Date: 2020-05-27 16:23:28
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-27 17:32:27
 * @Description: hash模式
 */ 

 let app =  document.getElementById('app')

 function RouterClass() {
   this.routes = {} // 路由数据
   this.curUrl = '' // 初始化url
   this.eventHashRouter()
 }

// 事件监听
 RouterClass.prototype.eventHashRouter = () => { // 监听hashchange
  window.addEventListener("load", this.hashRouter.bind(this));
  window.addEventListener('hashchange', this.hashRouter.bind(this))
 }

 // 获取hash数据
 RouterClass.prototype.hashRouter = () => {
   this.curUrl = window.location.hash.slice(1) || '/' // 去除'#'
   this.routes[this.curUrl]()
 }

 // push模式页面跳转
 RouterClass.prototype.push = function(url) {
  url = "#" +url;
  window.location.href = url;
}
//replace模式页面跳转
RouterClass.prototype.replace = function(url) {
  url = "#" +url;
  window.location.replace(url);
}

RouterClass.prototype.route = function(path, callback) { // url 回调函数
  this.routes[path] = callback || function(){}
}

var Router = new RouterClass() //初始化 使用

// 构造一个函数，根据url 改变 #app 中的内容，对页面进行渲染
Router.route('/', function() {
  app.innerHTML="首页"
})
Router.route('/news', function() {
  app.innerHTML="新闻页面"
})
Router.route('/product', function() {
  app.innerHTML="产品页面"
})