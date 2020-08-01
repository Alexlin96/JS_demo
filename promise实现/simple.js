class MyPromise {
  constructor(fn) {
    this.status = 'pending' // 初始化状态 pending fulfilled rejected
    this._value = undefined; // 数据结果
    let resolve = (res) => { // resolve方法，成功后执行，将状态改变为resolved，并且将结果返回
      if (this.status !== 'pending') return
      this.status = 'fulfilled'
      this._value = res
    }
    let reject = (res) => { // reject方法，异常时执行，状态改为rejected，并且将失败的原因返回
      if (this.status !== 'pending') return
      this.status = 'rejected'
      this._value = res
    }

    // try、catch捕获异常，如果错误，执行reject方法
    try {
      fn(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
}