/*
  十进制转二进制
*/
// 思路:用栈实现 (先进后出)
const trans10To2 = (num) => {
	const arr = []
	let res = ''
	while ((num / 2) > 0) { // 入栈
		arr.push(num % 2)
		num = Math.floor(num / 2)
	}

	while(arr.length > 0) { // 出栈
		res += arr.pop()
	}
	
	return res
}