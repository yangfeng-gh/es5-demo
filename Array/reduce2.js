var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];

function getWordCnt() {
  var obj = {};

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    obj[item] = (obj[item] + 1) || 1;
  }

  return obj;
}

// console.log(getWordCnt());

var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];

function getWordCnt2() {
  return arr.reduce(function (previous, current) {
    console.log(previous);
    previous[current] = (previous[current] + 1) || 1;
    return previous;
  }, {});
}
// 提供了初始值{}，则previous={}，current=arr[0]（即apple）
// 未提供初始值时，previous='apple', current='orange'

// 总结：循环结束的条件是current=数组最后的元素，未提供初始值循环次数=arr.length-1，提供初始值会多一次循环

getWordCnt2();
