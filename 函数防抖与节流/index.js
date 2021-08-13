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
    （你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行）
    函数防抖：是函数在特定的时间内不被再调用后执行。
*/

// 封装防抖
function debounce(fn, wait = 1000) {
  let timer
  return (...args) => {
    var _this = this
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, [...args])
    }, wait);
  };
}

debounce(()=> {
  console.log('执行6666', a, this)
})(a = 300)

// 封装节流
function throttle(fn, wait = 500) {
  let timer
	return ((...args) => {
    var _this = this
		if (!timer) {
			timer = true
			setTimeout(() => {
				fn.apply(_this, [...args])
				timer = false
			},wait)
		}
	})
}
throttle(()=> {
  console.log('执行66668888', a)
})(a = 300)



