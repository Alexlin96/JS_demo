// 观察者模式

class Subject { // 被观察者
  constructor() {
    this.objsevers = [] // 观察者
    this.state = false
  }

  add(objsever) { // 添加观察者
    this.objsevers.push(objsever)
  }

  setState(newState) { // 状态改变 通知Objsever 触发更新
    this.state = newState
    this.objsevers.forEach( objsever=> {
      objsever.update(newState)
    });
  }
}

class Objsever { // 观察者
  constructor(name) {
    this.name = name
  }

  update(state) {
    console.log(this.name + '收到更新通知，变为' + state)
  }
}

const sub = new Subject() 

const obs_1 = new Observer('观察者1')
const obs_2 = new Observer('观察者2')
sub.add(obs_1)
sub.add(obs_2)

// 被观察者的状态改变 触发观察者更新
sub.setState(true)

