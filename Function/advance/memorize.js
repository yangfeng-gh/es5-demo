/**
 * 接收一个函数作为实参，并返回带有记忆能力的函数。
 * @param f
 * @returns {Function}
 */

//返回f()的带有记忆功能的版本
//只有当f()的实参的字符串表示都不相同它才会工作
function memorize(f) {
  var cache = {}; //将值保存在闭包内
  return function () {
    //将实参转换为字符串形式，并将其用做缓存的键
    var key = arguments.length + [].join.call(arguments, ",");
    if (key in cache) {
      console.log(cache);
      return cache[key];
    } else {
      return cache[key] = f.apply(this, arguments);
    }
  };
}


//返回两个整数的最大公约数
//使用欧几里德算法：
function gcd(a, b) {   //这里省略对a和b的类型检查
  var t;                  //临时变量用来存储交换数值
  if (a < b) t = b, b = a, a = t;     //确保a>=b
  while (b != 0) t = b, b = a % b, a = t; //这是求最大公约数的欧几里德算法
  return a;
}

var gcd_m = memorize(gcd);
var product = gcd_m(85, 187); //=>17
product = gcd_m(85, 187); //=>17, 这一次会走缓存
console.log(product);
//注意，当我们写一个递归函数时，往往需要实现记忆功能
//我们更希望调用实现了记忆功能的递归函数，而不是原递归函数
var factorial = memorize(function (n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
});
product = factorial(5); //=>120.对于4-1的值也有缓存
console.log(product);

