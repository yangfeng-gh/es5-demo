/**
 * 枚举类型
 */
function inherit(p) {
  if (p == null) throw  TypeError(); //p是一个对象但不能是null
  if (Object.create) //如果Object.create()存在
    return Object.create(p); //直接使用它
  var t = typeof p; //否则进一步检测类型
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {
  }; //定义一个空的构造函数
  f.prototype = p; //将其原型属性设置为p
  return new f(); //使用f()创建p的继承对象
}

function enumeration(namesToValues) {
  var enumeration = function () {
    throw "Can't Instantial Enumerations";
  };

  var proto = enumeration.prototype = {
    constructor: enumeration,
    toString: function () {
      return this.name;
    },
    valueOf: function () {
      return this.value;
    },
    toJSON: function () {
      return this.name;
    }
  };
  enumeration.values = [];
  //创建新类型的实例
  for (name in namesToValues) {
    var e = inherit(proto);
    e.name = name;
    e.value = namesToValues[name];
    enumeration[name] = e;
    enumeration.values.push(e);
  }

  enumeration.foreach = function (f, c) {
    for (var i = 0; i < this.values.length; i++) {
      f.call(c, this.values[i]);
    }
  };
  return enumeration;
}
