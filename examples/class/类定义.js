/**
 * JavaScript类定义分三步
 */
var extend = (function () { //这个函数的返回值赋值给extend
  //在修复它之前，首先检查是否存在bug
  for (var p in {toString: null}) {
    //如果代码执行到这里，那么for/in循环会正确工作并返回
    //一个简单版本的extend()函数
    return function extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source)
          o[prop] = source[prop];
      }
      return o;
    };
  }
  //如果代码执行到这里，说明for/in循环不会枚举测试对象的toString属性
  //因此返回另一个版本的extend()函数，这个函数显式测试
  //Object.prototype中的不可枚举属性
  return function patched_extend(o) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      //复制所有可枚举属性
      for (var prop in source)
        o[prop] = source[prop];
      //现在检查特殊属性
      for (var j = 0; j < prototypes.length; j++) {
        prop = prototypes[j];
        if (source.hasOwnProperty(prop)) {
          o[prop] = source[prop];
        }
      }
    }
    return o;
  };
  var prototypes = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
}());

function defineClass(constructor, method, static) {
  if (method) extend(constructor.prototype, method);
  if (static) extend(constructor, static);
  return constructor;
}

var SimpleRange = defineClass(function (f, t) {
  this.f = f;
  this.t = t;
}, {
  includes: function (x) {
    return this.f <= x && x <= this.t;
  },
  toString: function () {
  }
}, {
  upto: function (t) {
    return new SimpleRange(o, t);
  }
});
console.log(SimpleRange);
