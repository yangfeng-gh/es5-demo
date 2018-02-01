function type(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  if (o !== o) return "NaN"; //NaN不等于NaN
  //识别原始值的类型和函数
  if ((t = typeof(o)) !== "object") {
    return t;
  }
  //识别大多数内置对象
  if ((c = classOf(o)) !== "Object") {
    return c;
  }
  //自定义对象返回构造函数的名字
  if (o.constructor && typeof o.constructor === "function" && o.constructor.getName())
    return o.constructor.getName();
  //其它类型无法识别，一律返回"Object"
  return "Object";
}

function classOf(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1); // Object.prototype.toString.call(o)的值是[object Array]
}

Function.prototype.getName = function () {
  if ("name" in this) return this.name;
  return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};

//这个构造函数没有名字
var Complex = function (x, y) {
  this.r = x;
  this.i = y;
};

//这个构造函数有名字
var Range = function Range(f, t) {
  this.from = f;
  this.to = t;
};

console.log(type(1));
console.log(type(new Date()));
console.log(type(new Complex));
console.log(type(new Range()));
