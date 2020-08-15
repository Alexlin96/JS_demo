function getUrlListFn(data) {
  const res = []
  for(let i = 0; i < data.length; i++) {
    res.push(dfsFn([data[i]]))
  }
  return res
}

function dfsFn(data, result = []) {
	for(let i = 0; i < data.length; i++) {
		result.push(data[i].id)
		data[i].children && data[i].children.length && (dfsFn(data[i].children, result))
	}
	return result
}

const treeData = [
  {
    id: 1,
    children: [
      { id: 2, children: [
        { id: 3, 
          children: [
            { id: 4, 
              children: [{
                id:6,
                children:[]
              }] 
            },
            { id: 5, 
              children: [] 
            }] 
        }] 
      },
    ],
  },
  {
    id: 11,
    children: [
      { id: 12, children: [
        { id: 13, 
          children: [
            { id: 14, 
              children: [{
                id:16,
                children:[]
              }] 
            },
            { id: 15, 
              children: [] 
            }] 
        }] 
      },
    ],
  }
]

const urlList = getUrlListFn(treeData)

console.log(urlList)


// 加入为子节点6 找顶点

function findTop(data, id) {
  let res = ''
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(id)) {
      res = data[i][0]
      break
    }
  }
  return res
}

console.log('子节点6的顶点是', findTop(urlList, 6))

// --------------------------------------------

function dfs(data) { // 深度优先
  let stack = []
  let res = []

  stack.push(data)
  while(stack.length !== 0) {
    let item = stack.pop() // 尾部删除
    
    res.push(item.name)

    let children = typeof item.children !== 'undefined' ? item.children : []

    for(let i = children.length -1 ; i > 0 ; i--) {
      res.push(children[i])
    }
  }

  return res
}

function bfs(data) { // 广度优先
  let queue = []
  let res = []

  queue.push(data)

  while(queue.length !==0) {
    let item = queue.shift() // 头部删除
    res.push(item.name)
    
    let children = typeof item.children !== 'undefined' ? item.children : []

    for(let i = 0; i < children.length; i++) {
      res.push(children[i])
    }
  }
}