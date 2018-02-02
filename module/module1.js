/**
 * 立即执行函数
 * Immediately-Invoked Function Expression, IIFE
 */

var module1 = (function () {
  var _count = 0;
  var getCount = function() {
    return _count;
  };
  var setCount = function (count) {
    _count = count;
  };
  var print = function () {
    console.log(_count);
  };
  var incr = function () {
    _count++;
  };
  return {
    getCount: getCount,
    setCount: setCount,
    print: print,
    incr: incr
  }
})();

console.log(module1._count); // undefined, _count是module的私有变量
module1.incr(); // incr是module1对外暴露的公有方法
module1.print(); // 1
