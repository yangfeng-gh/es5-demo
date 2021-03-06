/**
 * 重写Date类构造函数
 */
function MyDate(dateString) {
  var dateTime = dateString.split(/\s+/);
  var date = dateTime[0].split(/\/|-/);
  var time = dateTime[1].split(/:/);
  return new Date(date[0], date[1], date[2], time[0], time[1], time[2]);
}

var today = new MyDate("2016/4/25 11:59:59");
var yesterday = new MyDate("2016-4-24 11:59:59");
console.log(today);
console.log(yesterday);
