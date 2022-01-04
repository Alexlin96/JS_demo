/*
  十进制转二进制
*/
// 思路:用栈实现 (先进后出)
const trans10To2 = (num) => {
	const arr = []
	let res = ''
	while ((num / 2) > 0) { // 入栈 记录余数
		arr.push(num % 2)
		num = Math.floor(num / 2)
	}

	while(arr.length > 0) { // 出栈 输出余数
		res += arr.pop()
	}
	
	return res
}
console.log('trans10To2', trans10To2(35))

/*
	二进制转十进制
*/
const trans2To10 = (num) => {
	const numArr = String(num).split('')
	const arr = []
	while(numArr.length > 0) { // 从尾到首输出 后进先出
		arr.push(numArr.pop())
	}
	let nums = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '1') {
			nums += 2 ** i
		}
	}
	return nums
}
console.log('trans2To10', trans2To10(100011))
