/**
 * let instance = new MyPromise(function(resolve, reject) {});
 * instance.then(res => {}, err => {});
 */
let MyPromise = (function() {
  let state = {
      PENDING: 0,
      FULFILLED: 1,
      REJECTED: 2
  };
  
  function MyPromise(fn) {
      this._state = state.PENDING; // promise的状态
      this._value = undefined; // 数据结果，给resolve回调
      this._error = {}; // 报错信息，给reject回调
      this._callbacks = []; // resolve回调数组
      this._callbacksForRejected = []; // reject回调数组

      handlePromise(fn, this);
  }

  function handlePromise(fn, promise) {
      try {
          fn(resolve.bind(promise), reject.bind(promise));
      } catch(err) {
          reject.call(promise, err);
      }
  }

  /**
   * resolve方法核心； 
   * 只负责保存数据结果，供回调使用，以及改变状态
   */
  function resolve(value) {
      this._value = value;
      this._state = state.FULFILLED;

      setTimeout(()=>{ // 见then方法中的说明
          this._callbacks.forEach(onFulfilled => {
              onFulfilled(value);
          });

          this._callbacks.length = 0;
      }, 0);
  }

  // reject
  function reject(error) {
      this._error = error;
      this._state = state.REJECTED;

      setTimeout(()=>{
          this._callbacksForRejected.forEach(onRejected => {
              onRejected(error);
          })
      }, 0);
  }
  
  // then
  MyPromise.prototype.then = function(onFulfilled, onRejected) { // then方法，传入回调
      /**
       * 在then后，若还在pending，
       * 说明主函数还没结束，先将回调都存在callbakcs数组中，
       * 等主函数结束后，在resolve方法中调用callbacks中的回调方法
       * 
       * 若pending结束，则直接调用回调
       */
      switch(this._state){
          case state.PENDING:
              this._callbacks.push(onFulfilled);
              this._callbacksForRejected.push(onRejected);
              break;
          case state.FULFILLED:
              onFulfilled(this._value);
              break;
          case state.REJECTED:
              onRejected(this._error);
              break;
      }

      return this;
  }

  return MyPromise;
})();



// test
// let a = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//       try{
//           // throw Error('FAIL');
//           resolve('done');
//       } catch(e) {
//           reject('it is fail');
//       }
//   }, 3000);
// });

// a.then(data => {
//   console.log('_state', a._state);
//   console.log('data', data);
// }, err => {
//   console.log('err_state', a._state);
//   console.log('err', err); 
// });


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



