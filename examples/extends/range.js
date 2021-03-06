function inherit(p) {
  if (p == null) throw  TypeError(); //p是一个对象但不能是null
  if (Object.create) //如果Object.create()存在
    return Object.create(p); //直接使用它
  var t = typeof p; //否则进一步检测类型
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {
  } //定义一个空的构造函数
  f.prototype = p; //将其原型属性设置为p
  return new f(); //使用f()创建p的继承对象
}

function range(from, to) {
  var r = inherit(range.method);
  r.from = from;
  r.to = to;
  return r;
}

range.method = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function (f, o) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f.call(o, x);
  },
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
  compareTo: function (that) {
    return this.from - that.from;
  }
};
var r = range(1, 3);
var r2 = range(3, 4);
console.log('r.includes(2)' + r.includes(2));
console.log('r comparTo r2: ' + r.compareTo(r2));
r.foreach(console.log, console);
