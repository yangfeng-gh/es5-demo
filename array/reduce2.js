var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];

function getWordCnt() {
  var obj = {};

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    obj[item] = (obj[item] + 1) || 1;
  }

  return obj;
}

console.log(getWordCnt());

var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];

function getWordCnt() {
  return arr.reduce(function (previous, current) {
    previous[current] = (previous[current] + 1) || 1;
    return prev;
  }, {});
}

console.log(getWordCnt());
