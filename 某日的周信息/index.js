function getFirstOrLastDayOfWeek(v, t = 'left') { // left 获取某个日期所在的周的周一 right获取某个日期所在的周的周日
  const date = new Date(v)
	const datetime = date.getTime()
	const day = date.getDay()
	const dayOfWeek = day === 0 ? 7 : day
	console.log('dayOfWeek', dayOfWeek)
	if (t === 'left') {
		return new Date(datetime - (dayOfWeek - 1) * 3600 * 1000 * 24)
	} else if (t === 'right') {
		return new Date(datetime + (7 - dayOfWeek) * 3600 * 1000 * 24)
	}
}

// 日期格式
const formatDate = function(date, fmt) {
  // fmt日期格式 yyyy-MM-dd
  if (date) {
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        `${date.getFullYear()}`.substr(4 - RegExp.$1.length)
      )
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
        )
      }
    }
    return fmt
  }
  return ''
}

console.log('xxx', formatDate(getFirstOrLastDayOfWeek(new Date('2021-08-09'), 'right'), 'yyyy-MM-dd'))