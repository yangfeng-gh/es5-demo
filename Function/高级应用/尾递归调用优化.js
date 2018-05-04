// 递归求阶乘
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 尾递归
function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

console.log(tailFactorial(5, 1)); // 120

/*
为什么计算5的阶乘，需要传入两个参数5和1？
 */

// 解决方案一：创建一个函数封装尾调用函数
function factorialWrapper(n) {
  return tailFactorial(n, 1);
}

// 解决方案二：柯里化
function currying(fn, n) {
  return function(m) {
    return fn.call(this, m, n);
  }
}

var curryingFactorial = currying(tailFactorial, 1);
console.log(curryingFactorial(5));

// 解决方案三：设置函数参数默认值
function simpleFactorial(n, total) {
  total = total || 1; // 相当于es6中的函数参数默认值
  if (n === 1) return total;
  return simpleFactorial(n - 1, n * total);
}

console.log(simpleFactorial(5));
