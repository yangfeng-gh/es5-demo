/**
 * 私有状态
 */
function Range(from, to) {
  //不要将端点保存为对象的属性，相反定义存取器函数来返回端点的值，这些值都保存在闭包中
  this.from = function () {
    return from;
  };
  this.to = function () {
    return to;
  };
}

//原型上的方法无法直接操作端点
//它们必须调用存取器方法
Range.prototype = {
  constructor: Range,
  includes: function (x) {
    return this.from() <= x && x <= this.to();
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from()), max = this.to(); x <= max; x++) f(x);
  },
  toString: function () {
    return "(" + this.from() + "..." + this.to() + ")";
  }
};

var r = new Range(1, 5); //一个不可修改的范围
console.log(r.from(), r.to());
r.from = function () {
  return 0;
}; //通过方法替换来修改它
console.log(r.from(), r.to());
