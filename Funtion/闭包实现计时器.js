function count() {
  var n = 0;
  return {
    count: function () {
      return n++
    },
    reset: function () {
      n = 0
    }
  };
}

var a = count(), b = count();
console.log(a.count()); //0
console.log(b.count()); //0
console.log(a.count()); //1
console.log(b.count()); //1
a.reset(); //reset和count方法共享状态
console.log(a.count()); //0
console.log(b.count()); //2
