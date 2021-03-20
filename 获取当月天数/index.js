function getMonthDates(data) {
  let date = data
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let d = new Date(year, month, 0)
  console.log('d', d)
  return d.getDate()
}

function getNum(dd) {
  let month = dd.getMonth() + 1
  dd.setMonth(month)
  dd.setDate(0)
  console.log('dd', dd)
}
getNum(new Date())
// let dd = new Date()
// dd.setMonth(12)
// console.log('dd', dd)