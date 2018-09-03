/**
 * 求最大公约数
 * @param a 正整数
 * @param b 正整数
 * @returns {*} 正整数
 */

function gcd(a, b) {
  var t;
  if (a < b) t = b, b = a, a = t;
  while (b != 0) t = b, b = a % b, a = t;
  return a;
}

var c = gcd(36, 27);
console.log(c);
