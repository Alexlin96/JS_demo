// Vue.extend 属于 Vue 的全局 API。它使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象

// 文件 a.js 
import Vue from 'vue'
import Main from './toast.vue'

let Toast = Vue.extend(Main)

let instance
const toast = function(options) {
  options = options || {}
  instance = new Toast({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast

// mian.js
import Vue from 'vue'
import toast from './components/toast'
Vue.prototype.$toast = toast // 挂载到vue原型


/*
Vue.extend 和 Vue.component 的区别

  component是需要先进行组件注册后，然后在 template 中使用注册的标签名来实现组件的使用。Vue.extend 则是编程式的写法。
  控制component的显示与否，需要在父组件中传入一个状态来控制或者在组件外部用 v-if/v-show 来实现控制，而 Vue.extend 的显示与否是手动的去做组件的挂载和销毁。
*/