class MyPromise {
  constructor(fn) {
    this.PENDING = 0;
    this.FULFILLED = 1;
		this.REJECTED = 2;
		this._state = this.PENDING; // promise的状态
		this._value = undefined; // 数据结果，给resolve回调
		this._error = {}; // 报错信息，给reject回调
		this._callbacks = []; // resolve回调数组
    this._callbacksForRejected = []; // reject回调数组
    this.fn = fn
    this.sayHello()
		this.handlePromise()
  }
  sayHello() {
    console.log('4444',this._state)
  }
	handlePromise() {
		const that = this
		try {
      this.fn(this.resolve, this.reject.bind(this)); // 这里this怎么会丢失
      // this.fn(this.resolve.bind(this), this.reject.bind(this)); // this指向undefined 需要更正this的指向到class 
		} catch(err) {
			this.reject.call(this, err);
		}
	}
	resolve(value) {
    console.log('9999',this)
		this._value = value;
		this._state = this.FULFILLED;
		setTimeout(() => {
			this._callbacks.map(onFulfilled => onFulfilled(value) )
			this._callbacks.splice(0) // 清空
		},0)
	}

	reject(err) {
		this._error  = err;
		this._state = this.REJECTED;
		setTimeout(() => {
			this._callbacksForRejected.map(onRejected => onRejected(value) )
			this._callbacksForRejected.splice(0) // 清空
		},0)
	}

	then(onFulfilled, onRejected) {
		switch (this._state) {
			case this.PENDING:
				this._callbacks.push(onFulfilled);
				this._callbacksForRejected.push(onRejected);
				break;
			case this.FULFILLED:
				// onFulfilled(this._value);
				break;
			case this.PENDING:
				onRejected(this._error);
				break;
			default:
				break;
		}
		return this
	}
}


(async function test() {
  await new MyPromise((resolve, reject) => {
    setTimeout(()=>{
      resolve('延迟2秒')
    },2000)
  }).then(res => {
    console.log(res)
  })
  console.log('等待延迟')
})()


