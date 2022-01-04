// function _newThis() {
//     [this.name,this.age] = [...arguments];
//     console.log(this);
// }
// function _newFunction (){
//     [this.name,this.age] = [...arguments];
//     console.log(this);
// }
// let newThis = new _newThis('alex','23');  // this指向实例对象
// let newFunction = _newFunction.call(newThis,'alex','2324')   // call 一个一个参数传  apply 参数传数组

const wrapper = (fn) => {
      console.log('wrapper', this) // window
    
      return function() {
        console.log('inner', this) // xxxx
        function cc() {
          console.log('cc', this) // window
        }    
        cc()
        fn()
      }
    }
    
    let innerFn = function() {
      console.log('innerFn', this) // window
    }
    
    let fn = wrapper(innerFn)
    
    let o = { fn }
    
    o.fn()

		const debounce = (fn, wait = 200) => {
			let timer
			return (...args) => {
				var _this = this
				clearTimeout(timer)
				timer = setTimeout(() => {
					fn.apply(_this, [...args])
				}, wait)
			}
		}