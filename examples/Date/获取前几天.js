function getDay(day) {
  day = day || 0
  var today = new Date()
  var targetday_ms = today.getTime() + day * 1000 * 60 * 60 * 24
  today.setTime(targetday_ms)
  var tYear = today.getFullYear()
  var tMonth = today.getMonth()
  var tDate = today.getDate()
  tMonth = padMonth(tMonth + 1)
  tDate = padMonth(tDate)
  return tYear + '-' + tMonth + '-' + tDate + ' 00:00'
}

function padMonth(month) {
  var m = month
  if (month.toString().length == 1) {
    m = '0' + month
  }
  return m
}

//获取最近7天日期
console.log(getDay(0));//当天日期
console.log(getDay(-7));//7天前日期
//获取最近3天日期
console.log(getDay(0));//当天日期
console.log(getDay(-3));//3天前日期
