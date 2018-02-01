/**
 * 高阶函数：Higher-order function
 * 在通常的编程语言中，函数的参数只能是基本类型或者对象引用，返回值也只是基本数据类型或对象引用。
 * 但在Javascript中函数作为一等公民，既可以当做参数传递，也可以被当做返回值返回。
 * 所谓高阶函数就是可以把函数作为参数，或者是将函数作为返回值的函数。
 */

function not(f) {
  return function () {
    var result = f.apply(this, arguments);
    console.log(arguments);
    console.log(this);
    return !result;
  };
}

var even = function (n) {
  return n % 2 == 0;
};
var odd = not(even);
console.log(not(even)(1));
//[1,3,5,7,9].every(odd);