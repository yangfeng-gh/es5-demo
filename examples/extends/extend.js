/**
 定义一个扩展函数，用来将第二个以及后续参数复制至第一个参数
 这里我们处理了IE bug:在多数IE版本中
 如果o的属性拥有一个不可枚举的同名属性，则for/in循环不会枚举对象o的可枚举属性，
 也就是说，将不会正确地处理诸如toString的属性,除非我们显式检测它
 */
var extend = (function () { // 这个函数的返回值赋值给extend
  // 在修复它之前，首先检查是否存在bug
  for (var p in {toString: null}) {
    console.log('for/in存在不会枚举对象的与不可枚举属性同名的可枚举属性bug');
    // 如果代码执行到这里，那么for/in循环会正确工作并返回
    // 一个简单版本的extend()函数
    return function extend(o) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source)
          o[prop] = source[prop];
      }
      return o;
    };
  }
  // 如果代码执行到这里，说明for/in循环不会枚举测试对象的toString属性
  // 因此返回另一个版本的extend()函数，这个函数显式测试Object.prototype中的不可枚举属性
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

  // 此处发生变量提升
  var prototypes = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
}());

var person = {
  id: 1,
  name: 'yvan',
  toString: function () {
    return 'id: ' + this.id + "  name: " + this.name;
  }
};

var me = extend({}, person);
console.log(me.toString());
