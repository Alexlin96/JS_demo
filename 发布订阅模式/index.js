
// 发布订阅
class Events {
  constructor() {
    this.sub = {}  // 容器
  }

  $on(name, fn) { // 根据不同的name 订阅对应的函数
    const wrap = this.sub[name] || (this.sub[name] = [])
    wrap.push(fn)
  }

  $emit() { // 遍历所有相同name的订阅函数，并发布
    const args = [...arguments]
    const name = args[0]
    const params = args.slice(1)
    const fns = this.sub[name] || []
    const fnsLen = fns.length
    if (fnsLen) { // 存在订阅
      for (let i = 0; i < fnsLen; i++) {
        fns[i](...params)
      }
    }
  }

  $of(name) { // 销毁，避免内存泄漏
    this.sub[name] = null
  }
}

const event = new Events()

// 订阅
event.$on('call', res => {
  console.log('call', res)
})

event.$on('call', res => {
  console.log('call777', res)
})

// 发布
// event.$emit('call', [1,2,3,4])
event.$emit('call', 666)

// vue中eventBus的原理就是发布订阅模式
// 缺点 当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者会始终存在于内存中，所以不使用的时候 应该销毁


