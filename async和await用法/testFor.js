async function func(array) {
	array.forEach(async i => { // forEach中await无效
		await someFunc(i);
	});
	console.log('执行结束')
}

function someFunc(i) {
	return new Promise(resolve => {
		setTimeout((i) => {
			console.log('执行i', i)
			resolve()
		}, 1000)
	})
}

func(['lin', 'zhang', 'wu'])