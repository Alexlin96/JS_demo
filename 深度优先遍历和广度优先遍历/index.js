/*
 * @Autor: alexlin
 * @Date: 2020-04-29 16:13:54
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-04-29 19:24:49
 * @Description: 深度优先和广度优先
 */
const data = [
  {
		name: 'a',
		children: [
			{ name: 'b', children: [{ name: 'e' }] },
			{ name: 'c', children: [{ name: 'f' }] },
			{ name: 'd', children: [{ name: 'g' }] },
		],
	},
	{
		name: 'a2',
		children: [
			{ name: 'b2', children: [{ name: 'e2' }] },
			{ name: 'c2', children: [{ name: 'f2' }] },
			{ name: 'd2', children: [{ name: 'g2' }] },
		],
	}
]
// 深度优先遍历(DFS) 自上而下的遍历
// 思路 以纵向的维度对dom树进行遍历，从一个dom节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后在遍历它的兄弟节点
// 递归实现
function dfsFn(data, result = []) {
	for(let i = 0; i < data.length; i++) {
		result.push(data[i].name)
		data[i].children && data[i].children.length && (dfsFn(data[i].children, result))
	}
	return result
}
// console.log('dfsFn', dfsFn(data, []))

// 非递归实现 (栈 先进后出)
function dfsFn_1(data) {
	let result = []
	let stack = []
	data.forEach(el => {
		stack.push(el)
		while (stack.length !== 0) {
			let item = stack.pop() // 删除最后一个 栈顶 出栈
			result.push(item.name)
			let children = typeof item.children !== 'undefined' ? item.children : []
			for (let i = children.length - 1; i >= 0 ; i--) {
				stack.push(children[i])
			}
		}
	});
	return result
}
console.log('dfsFn_1', dfsFn_1(data))

// 广度优先遍历(BFS) 逐层遍历 队列 先进先出
// 非递归
function bfsFn(data) {
	let result = []
	let queue = []
	queue = [...data]
	while(queue.length !== 0) {
		let item = queue.shift()
		result.push(item.name)
		let children = typeof item.children !== 'undefined' ? item.children : []
		for (let i = 0; i < children.length ; i++) {
			queue.push(children[i])
		}
	}
	return result
}
// console.log('bfsFn', bfsFn(data))

