function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

function getAllDates(begin, end, fmt) {
  let arr = [],
    ab = begin.split('-'),
    ae = end.split('-'),
    format = fmt || '{y}-{m}-{d}',
    db = new Date(ab[0], ab[1] - 1, ab[2])
    let de = new Date(ae[0], ae[1] - 1, ae[2])

    let unixDb = db.getTime() - 24 * 60 * 60 * 1000
    let unixDe = de.getTime() - 24 * 60 * 60 * 1000
    for (let k = unixDb; k <= unixDe;) {
      k = k + 24 * 60 * 60 * 1000
      arr.push(parseTime(new Date(parseInt(k)), format))
    }
    console.log('arr', arr)
    return arr
}

// function getmonthDates (data) {
//   let date = data
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1
//   let d = new Date(year, month, 0)
//   return d.getDate()
// },

getAllDates('2022-06-21', '2022-06-23')



