Array.prototype.mapOpt = function(fn) {
  let res = []
  for(let i = 0; i < this.length; i++ ) {
    if (fn(this[i])) {
      res.push(this[i])
    }
  }
  return res
}


let arr = [1,2,3,4,5]

let res = arr.mapOpt(item => item > 2)