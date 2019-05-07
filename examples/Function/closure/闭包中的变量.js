/**
 * 原函数
 * @return {any[]}
 */
function createFunctions() {
  var result = new Array();

  for (var i=0; i<10; i++) {
    result[i] = function() {
      return i;
    };
  }

  return result;
}

/**
 * 改写后的函数
 * @return {any[]}
 */
function createFunctions2() {
  var result = new Array();

  for (var i=0; i<10; i++) {
    result[i] = function(num) {
      return function() {
        return num;
      }
    }(i);
  }

  return result;
}

var f = createFunctions();
console.log(f[1]()); // 10, 由于存在变量提升，createFunctions()以后i=10
var f2 = createFunctions2();
console.log(f2[1]()); // 1,
