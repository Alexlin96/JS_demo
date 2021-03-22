/**
 * @description: 获取月份间所有月份
 * @param {*} 传入 YYYY-MM , YYYY-MM  (2020-09)  (2020-12)
 * @return {*} 返回 YYYY-MM 数组
 */
function getYearAndMonth(start, end) {
  var result = [];
  var starts = start.split("-");
  var ends = end.split("-");
  var staYear = parseInt(starts[0]);
  var staMon = parseInt(starts[1]);
  var endYear = parseInt(ends[0]);
  var endMon = parseInt(ends[1]);
  while (staYear <= endYear) {
    if (staYear === endYear) {
      while (staMon < endMon) {
        staMon++;
        var str = staYear + "-" + (staMon >= 10 ? staMon : "0" + staMon);
        result.push(str);
      }
      staYear++;
    } else {
      staMon++;
      if (staMon > 12) {
        staMon = 1;
        staYear++;
      }
      var str = staYear + "-" + (staMon >= 10 ? staMon : "0" + staMon);
      result.push(str);
    }
  }
  return [start, ...result];
}

/**
 * 获取当前的周一、周日
 * time 选择日期的时间戳
 */
function getNowDateAndNowWeek(time) {
  //选中的时间戳
  var timestamp = time;
  var serverDate = new Date(time);
  let nDay = serverDate.getDay() === 0 ? 7 : serverDate.getDay()

  //本周周日的的时间
  console.log('nDay', nDay)
  var sundayTiem = timestamp + (7 -  nDay) * 24 * 60 * 60 * 1000;
  var SundayData = new Date(sundayTiem);
  //年
  var tomorrowY = SundayData.getFullYear();
  //月
  var tomorrowM =
    SundayData.getMonth() + 1 < 10
      ? "0" + (SundayData.getMonth() + 1)
      : SundayData.getMonth() + 1;
  //日
  var tomorrowD =
    SundayData.getDate() < 10
      ? "0" + SundayData.getDate()
      : SundayData.getDate();
  console.log("周日：  " + tomorrowY + "-" + tomorrowM + "-" + tomorrowD);

  // 本周周一的时间
  var mondayTime = timestamp - (nDay - 1) * 24 * 60 * 60 * 1000;
  var mondayData = new Date(mondayTime);
  //年
  var mondayY = mondayData.getFullYear();
  //月
  var mondayM =
    mondayData.getMonth() + 1 < 10
      ? "0" + (mondayData.getMonth() + 1)
      : mondayData.getMonth() + 1;
  //日
  var mondayD =
    mondayData.getDate() < 10
      ? "0" + mondayData.getDate()
      : mondayData.getDate();
  //输出值
  return [mondayY + "-" + mondayM + "-" + mondayD, tomorrowY + "-" + tomorrowM + "-" + tomorrowD]
}

console.log("xxx", getNowDateAndNowWeek(new Date('2021-01-25').getTime()));
