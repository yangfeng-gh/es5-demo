/**
 * Created by yvan on 2016-06-29.
 */

// 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。
function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

function factorial(n) {
  return tailFactorial(n, 1);
}

var v = factorial(5); // 120
console.log(v);

function factorial2(n, total = 1) {
  if (n === 1) return total;
  return factorial2(n - 1, n * total);
}

var v2 = factorial2(5); // 120
console.log(v2);
