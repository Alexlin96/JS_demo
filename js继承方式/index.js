// 构造函数继承

function box_1() {
  console.log('我被继承了')
  this.name = 'box_1'
}

function box_2() {
  this.name = 'box_2'
  box_1.call(this)
  console.log('完成', this.name)
}

box_2()


// 原型继承
function p1() {
  this.name = 'p1'
}

function p2() {
  console.log(this.name)
}

p1.age = '23'

p1.prototype.sexy = 'boy'

p2.prototype = new p1()

new p2()

// 组合继承
function t1() {
  this.name = 'lin'
}
t1.prototype.age = 22

function t2() {
  t1.call(this)
  console.log(this.name)
  console.log(this.age)
}

t2.prototype = new t1()

new t2()



