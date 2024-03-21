/*
  题目1、实现 find 函数，使下列的代码调用正确
*/

// -----------------------------------------------
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  {userId: 8,  title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];
// class 写法
// class Query {
//   constructor (dataList) {
//       this.dataList = dataList
//   }

//   where (conditions) {
//       const keyList = Object.keys(conditions)
//       const dataList = this.dataList.filter(data => {
//           return keyList.every(k => conditions[k].test(data[k]))
//       })
//       return new Query(dataList)
//   }

//   orderBy(key, orderType) {
//       const func = (a, b) => (a[key] - b[key]) * (orderType == 'desc' ? -1 : 1)
//       const list = [...this.dataList].sort(func)
//       return new Query(list)
//   }
// }

// function find (dataList) {
//   return new Query(dataList)
// }
var find = function(origin) {
  let query = {}
  query.where = condition => {
    const conditionKeys = Object.keys(condition)
    origin = origin.filter(el => {
      return conditionKeys.every = (key => condition[key].test(el[key]))
    })
    return query
  }
  query.orderBy = (key, direction) => {
    origin.sort((a, b) => {
      return direction === 'desc' ? b[key] -a[key] : a[key] - b[key]
    })
    return dataList
  }
  return query
}
// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');
 
console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

// -----------------------------------------------

