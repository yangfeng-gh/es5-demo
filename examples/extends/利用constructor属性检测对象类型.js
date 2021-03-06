/**
 * 利用constructor属性检测对象类型
 */
function typeAndValue(x) {
  if (x == null) return ""; //Null和Undefined没有构造函数
  switch (x.constructor) {
    case Number:
      return "[Number] " + x;
      break;
    case String:
      return "[String] " + x;
      break;
    case Boolean:
      return "[Boolean] " + x;
      break;
    case Date:
      return "[Date] " + x;
      break;
    case RegExp:
      return "[Regexp] " + x;
      break;
    case Complex:
      return "[Complex] " + x;
      break;
  }
}

var today = new Date();
console.log(typeAndValue(today));
console.log(today.constructor);
