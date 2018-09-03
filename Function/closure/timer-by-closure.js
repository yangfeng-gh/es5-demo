/**
 * 闭包实现计数器
 * @returns {{count: count, reset: reset}}
 */

function counter() {
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

var counter1 = counter(), counter2 = counter();
console.log(counter1.count()); //0
console.log(counter2.count()); //0
console.log(counter1.count()); //1
console.log(counter2.count()); //1
counter1.reset(); //reset和count方法共享状态
console.log(counter1.count()); //0
console.log(counter2.count()); //2
