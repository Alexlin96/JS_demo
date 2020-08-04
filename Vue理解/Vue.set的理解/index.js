// 源码位置/src/core/observer/index.js  start----------------

// 判断给定变量是否是未定义，当变量值为 null时，也会认为其是未定义
export function isUndef (v: any): boolean %checks {
  return v === undefined || v === null
}

// 判断给定变量是否是原始类型值
export function isPrimitive (value: any): boolean %checks {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

// 判断给定变量的值是否是有效的数组索引
export function isValidArrayIndex (val: any): boolean {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

// set实现源码
export function set (target: Array<any> | Object, key: any, val: any): any {  // 这个api给对象或数组使用的
  if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {  // 判断target是不是undefined 或 null 或者是原始类型值，那么在非生产环境下会打印警告信息
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) { // 目标是数组
    target.length = Math.max(target.length, key) // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.splice(key, 1, val) // 触发数组的splice变异方法触发响应式
    return val
  }
  if (key in target && !(key in Object.prototype)) { // 目标是对象 并且属性key存在于目标上
    target[key] = val // 直接赋值
    return val
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) { // 不予许给Vue实例对象添加属性 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  // target本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val
    return val
  }

  // 进行响应式处理
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

// 源码end ------------------------------------

/*
  理解过程：
  1、目标是undefined或null或 null 或者是原始类型值 打印警告
  2、目标是数组 使用数组splice触发效应式
  3、目标是对象且key存在于对象 直接赋值
  4、不予许给vue实例对象添加属性操作
  5、目标是非响应数据，直接赋值
  6、进行响应式处理
*/
