// 基础+复杂类型 数组去重

function unique(arr) {
  let hash = {} // hash去重
  let resArr = [] 
  arr.forEach(item => {
    if (!hash[JSON.stringify(item)]) {
      resArr.push(item)
      hash[JSON.stringify(item)] = true
    }
  });
  return resArr
}

// 测试
let arr1 = [{name:'alex'},1,2,{'name': 'jj'},3,2,[1,2],5,1,{'name': 'alex'},[1,2]]

console.log(unique(arr1))