/**
 * 构造函数的重载和工厂方法
 */
function Set() {
  this.values = {};
  this.n = 0;

  if (arguments.length == 1 && isArrayLike(arguments[0]))
    this.add.apply(this, arguments[0]);
  else if (arguments.length > 0)
    this.add.apply(this, arguments);
}

// Complex.polar = function (r, theta) {
//   return new Complex(r * Math.cos(theta), r * Math.sin(theta));
// };

Set.fromArray = function (a) {
  s = new Set();
  s.add.apply(s, a);
  return s;
};

function isArrayLike(o) {
  if (typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    Math.floor(o.length) === o.length &&
    o.length <= 4294967296)
    return true;
  else
    return false;
}
