/**
 封装对象状态
 */

//这个版本的Range类是可变的，但将端点变量进行了良好的封装
//但端点的大小顺序还是固定的：from <= to
function Range(from, to) {
  //如果from大于to
  if (from > to) throw new Error("Range: from must be <= to");

  //定义存取器方法以维持不变
  function getFrom() {
    return from;
  }

  function getTo() {
    return to;
  }

  function setFrom(f) { //设置from的值时，不允许from大于to
    if (f <= to) from = f;
    else throw new Error("Range: from must be <= to");
  }

  function setTo(t) { //设置to的值时，不允许to小于from
    if (t >= from) to = t;
    else throw new Error("Range: to must be >= from");
  }

  //将使用取值器的属性设置为可枚举的、不可配置的
  Object.defineProperties(this, {
    from: {get: getFrom, set: setFrom, enumerable: true, configurable: false},
    to: {get: getTo, set: setTo, enumerable: true, configurable: false}
  });
}

Range.prototype = hideProps({
  constructor: Range,
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  }
});
