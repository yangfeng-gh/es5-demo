/**
 * @param fn
 * @return {Function}
 */
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

/**
 * 第二版
 * @param fn
 * @param length
 * @return {Function}
 */
function curry(fn, length) {
  // length表示要柯里化的函数需要的参数个数，形参个数
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function() {
    // arguments.length表示柯里化返回的函数接收的参数个数，实参个数
    if (arguments.length < length) {
      // 实参个数小于形参个数时，
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn = curry(function(a, b, c) {
  return [a, b, c];
});

console.log(fn("a", "b", "c"));
console.log(fn("a", "b")("c"));
console.log(fn("a")("b")("c"));
console.log(fn("a")("b", "c"));

console.log({} === {});
