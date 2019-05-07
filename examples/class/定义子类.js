/**
 * 定义子类
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

function inherit(p) {
  if (p == null) throw TypeError(); // p是一个对象但不能是null
  if (Object.create) // 如果Object.create()存在
    return Object.create(p); // 直接使用它
  var t = typeof p; // 否则进一步检测类型
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {
  }; // 定义一个空的构造函数
  f.prototype = p; // 将其原型属性设置为p
  return new f(); // 使用f()创建p的继承对象
}

function defineSubClass(superclass, //父类的构造函数
                        constructor, //新的子类的构造函数
                        methods, //实例方法：复制至原型中
                        statics) //类属性：复制至构造函数中
{
  //建立子类的原型对象
  constructor.prototype = inherit(superclass.prototype);
  constructor.prototype.constructor = constructor;
  //像常规类一样复制方法和属性
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);
  //返回这个类
  return constructor;
}

//也可以通过父类构造函数的方法来做到这一点
Function.prototype.extend = function (constructor, methods, statics) {
  return defineSubclass(this, constructor, methods, statics);
};

