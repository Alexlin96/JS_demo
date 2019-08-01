function delayIterateArray (arr, fn, delay = 2000) { // 遍历数组，在执行完当前回调之后，才会读取下一个元素
	let index = 0;
	
	//index 处于闭包状态 不会销毁index
	function lazyIteration () {
	  if (index < arr.length) {
		fn(arr[index], index);
		index++;
		setTimeout(lazyIteration, delay);
	  }
	}
  
	setTimeout(lazyIteration, 0);
	}

	function fn(item,index) {
		console.log('item',item);
		console.log('index',index);
	} 
	
	delayIterateArray([5,9,7,5,16,477,56,80],fn);