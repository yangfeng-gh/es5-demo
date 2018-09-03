/**
 * 记忆
 */
function memorize(f) {
  var cache = {};
  return function () {
    //将实参转换为字符串形式，并将其用做缓存的键
    var key = arguments.length + "-" + Array.prototype.join.call(arguments, "-");
    //console.log("key: " + key);
    if (key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  };
}

//返回两个整数的最大公约数,使用欧几里德算法，即辗转相除法
//欧几里德定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数
function gcd(a, b) {
  var t;
  if (a < b) t = b, b = a, a = t;
  while (b != 0) t = b, b = a % b, a = t;
  return a;
}

var gcdmemo = memorize(gcd);
var gcd1 = gcdmemo(85, 187);
console.log(gcd1);

//实现了记忆功能的递归函数
var factorial = memorize(function (n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
});
var fact5 = factorial(5);
console.log(fact5);
