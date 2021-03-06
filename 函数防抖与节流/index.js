// 函数防抖  （延迟调用执行）
// function _onresize() {
//   console.log("onresize");
// }
// function throttle(fn, context) {
//   // fn 防抖的函数  context执行上下文
//   clearTimeout(fn.timer);
//   fn.timer = setTimeout(() => {
//     fn.call(context);
//   }, 500);
// }
// window.onresize = () => {
//   throttle(_onresize, window);
// };

// // 函数节流   （特定时间 只执行一次）
// window.onresize = () => {
//   if (!this.timer) {
//     //开关门
//     console.log("onresize");
//     this.timer = true;
//     setTimeout(() => {
//       this.timer = false;
//     }, 300);
//   }
// };

/*总结 
    函数节流：是确保函数特定的时间内至多执行一次。
    函数防抖：是函数在特定的时间内不被再调用后执行。
*/

// 封装防抖
function debounce(fn, wait = 5000) {
  return (...args) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

// 封装节流
function throttle(fn, wait = 500) {
	return ((...args) => {
		if (!this.timer) {
			this.timer = true
			setTimeout(() => {
				fn(...args)
				this.timer = false
			},wait)
		}
	})()
}

debounce(()=> {
  console.log('执行6666', a)
})(a = 300)

