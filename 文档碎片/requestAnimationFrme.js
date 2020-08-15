
let ulDom = document.getElementById('box_ul')
const amount = 10000 // 数据总条数
const once = 20 // 每次渲染的条数
let renderRound = amount / once  // 渲染轮数
let showNum = 0
let animationID = null

function addFn() {
  let domFrament = document.createDocumentFragment
  renderRound --

  for(let i = 0; i < once; i++) {
    let liDom = document.createElement('li')
    liDom.innerText = ++showNum
    domFrament.appendChild(liDom)
  }

  ulDom.appendChild(domFrament)
  window.cancelAnimationFrame(animationID)
  loop()
}

function loop() {
  if (renderRound > 0) {
    animationID = window.requestAnimationFrame(add)
  }
}

loop()