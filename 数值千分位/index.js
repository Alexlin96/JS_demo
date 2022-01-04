// 数值转字符串遍历
function format_1(number) {
	const arr = String(number).split('.') // 小数整数部分分离
	const numArr = arr[0].split('') // 整数数组
  const decimal = arr[1] || '' // 小数
	let res = ''
	numArr.reverse().forEach((v, i) => { // 从后往前算 每千加，
		if ( i !== 0 && i%3 === 0) {
			res = v + ',' + res
		} else {
			res = v + res
		}
	})
	return decimal === '' ? res : res + '.' + decimal
}

// 正则
function format_2(number) {
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	return String(number).replace(reg, '$&,');
}

// toLocaleString
function format_3(number) {
	return number.toLocaleString()
}

// substring
function format_4(number) {
	const arr = String(number).split('.') // 小数整数部分分离
	const numArr = arr[0].split('') // 整数数组
  	const decimal = arr[1] || '' // 小数
}

// 77754545454