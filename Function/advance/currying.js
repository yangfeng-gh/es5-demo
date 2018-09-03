/**
 * 函数柯里化：将多参数函数转换为单参数函数
 */

function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);
console.log(factorial(5)); // 120
