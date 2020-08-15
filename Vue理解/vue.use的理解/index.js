// vue.use源码
import { toArray } from '../util/index'

export function initUse(Vue) {
  Vue.use = function(plugin) { // plugin = Function | Object
    const installedPlugins = this._installedPlugins || (this._installedPlugins = [])
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}

// plugin参数为函数或者对象类型
// vue回去寻找这个插件在已经安装插件列表里看有没有 没有的话进行安装插件，如果有则跳出函数，这就保证插件只被安装一次
// 接着通过toArray方法将参数变成数组，再判断plugin的install属性是否为函数 或者plugin本身就是函数，最后执行plugin.install或者plugin的方法

// 使用例子 引用js插件
export const deepClone = (obj, hash = new WeakMap()) => {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  // 如果obj是数组，那么 obj.constructor是[Function Array]
  // 如果obj是对象，那么 obj.constructor是[Function Object]
  let t = new obj.constructor();
  hash.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], hash);
    }
  }
  return t;
};
import { Button } from 'element-ui' // 引入button组件

const deepCopyBase = {
  install: Vue => {
    Vue.prototype.deepCopyBase = deepClone;
    Vue.component(Button.name, Button)
  }
};
export default deepCopyBase;

// 引入插件 use
import Vue from 'vue'
import deepCopyBase from "XXXX";
Vue.use(deepCopyBase) //初始化后 全局能直接使用deepCopyBase和Button