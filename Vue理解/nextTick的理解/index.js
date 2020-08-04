// 源码 位置 /src/core/util/next-tick.js  start -------------------------------------
import { noop } from 'shared/util'
import { handleError } from './error'
import { isIE, isIOS, isNative } from './env'

export let isUsingMicroTask = false  // 是否使用微任务

const callbacks = []
let pending = false

// 执行函数 里面会遍历callbacks保存的函数分别执行
function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
let timerFunc

if (typeof Promise !== 'undefined' && isNative(Promise)) {  // 判断1 原生支持promise
  const p = Promise.resolve()
  timerFunc = () => {  // 使用Promise.then
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && ( // 判断2 支持MutationObserver 监听DOM结构变化 
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) { // 判断3 使用setImmediate （宏）
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {  // 判断4 使用setTimeout （宏）
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
// 目的都是将flushCallbacks函数放入微任务(判断1和判断2)或者宏任务(判断3和判断4) 等待下一次事件循环时来执行

export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {  // 将回调函数放入callbacks变量中等待执行
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

// 源码 end -------------------------------------

/*
理解过程：
  1、把回调函数放入callbacks中等待执行
  2、将执行函数flushCallbacks放入微任务或者宏任务中去
  3、事件循环到了微任务或者宏任务，执行函数flushCallbacks执行依次遍历执行callbacks中的回调

*/