
// 文档碎片插入多个数据 节省性能
let fragment = document.createDocumentFragment()

for (let i = 0; i < 1000; i++) {
  let childDom = document.createElement('div')
  fragment.appendChild(childDom)
}
document.body.appendChild(fragment)