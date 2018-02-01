/**
 * js中检测对象的类的各种技术都有问题，至少在客户端javascript中是如此。解决方法是规避掉这些问题，不要关注“对象的类是什么”，而是关注“对象能做什么”
 * 鸭型辩型： 如果一个对象可以像鸭子一样走路，游戏，并且嘎嘎叫，就认为这个对象是鸭子，哪怕它并不是从鸭子类的原型对象继承而来
 */

/**
 * 三种检测对象的方式：
 * 1) instanceof
 */
console.log([1, 2, 3] instanceof Array); // true
console.log([1, 2, 3] instanceof Object); // true

// instanceof 实际计算过程中检测的是对象的继承关系，而不是检测创建对象时的构造函数，只是使用了构造函数作为中介

var a1 = new Array();
console.log(Array.prototype.isPrototypeOf(a1)); // true
console.log(Array.prototype.isPrototypeOf([1, 2, 3])); //true

// 使用isPrototypeOf来判断一个对象是否存在于另一个对象的原型链中，此时不使用构造函数作为中介


/**
 * 三种检测对象的方式：
 * 2) construtor
 * 每个js函数都可以用作构造函数，调用构造函数需要使用prototype属性，因而每个javascript函数会自动拥有prototype属性，
 * 这个属性值是一个对象，这个对象包含一个constructor属性，constructor属性值是作为构造函数的js函数
 */

var F = function () {
};
var p = F.prototype;
var c = p.constructor;
console.log(p); // {constructor: ƒ}
console.log(c); // ƒ (){}
console.log(c === F); // true

// 因而对象继承的constructor均指代他们的构造函数
var o = new F();
console.log(o.constructor === F); // true
var a2 = new Array();
console.log(a2.constructor === Array); // true

function typeDiscern(x) {
  switch (x.constructor) {
    case Number:
      return 'Number: ' + x;
    case String:
      return 'String: ' + x;
    case Array:
      return 'Array: ' + x;
  }
}

console.log(typeDiscern([1, 2, 3])); //Array: 1,2,3
console.log(typeDiscern('abc')); // String: abc
console.log(typeDiscern(5)); // Number: 5

// 定义person类：
function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  }
}

var wish = new Person('js');
console.log(wish.constructor === Person);
console.log(Person.prototype);
console.log(Person.constructor);
console.log(wish.getName());

// 给Person自定义prototype:
Person.prototype = {
  toString: function () {
    return this.name;
  }
};
var wish2 = new Person('js2');
console.log(wish2.constructor === Person);
console.log(Person.prototype);
console.log(Person.constructor);
console.log(wish2.getName);
console.log(wish2.toString());
// 此时新定义的原型对象不含有constructor属性，因而Person的实例也不包含constructor属性
// 解决方案：可显式的给原型添加构造方法
Person.prototype = {
  constructor: Person,
  toString: function () {
    return this.name;
  }
};
var wish3 = new Person('js3');
console.log(wish3.constructor === Person);
console.log(Person.prototype);
console.log(Person.constructor);
console.log(wish3.getName);
console.log(wish3.toString());

/**
 * 三种检测对象的方式：
 * 3) 构造函数名字
 * 没有intanceof和constructor的执行上下文问题，一个窗口中的Array构造函数和另一个窗口内Array构造函数不等，
 * 但是构造函数名字相同，但是并不是每个函数都有名字
 */
Function.prototype.getName = function () {
  if ('name' in this) {
    return this.name;
  }
  return this.name = this.toString().match(/function\s*([^(]*)/);
};

function test1() {
}

console.log(test1.getName());

/**
 * 利用鸭式辩型实现的函数：
 */
function quackImplements(o /*, ...*/) {
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case 'string':
        if (typeof o[arg] !== 'function') {
          return false;
        }
        continue;
      case 'function':
        arg = arg.prototype;
      case 'object':
        for (var m in arg) {
          if (typeof arg[m] !== 'function')
            continue;
          if (typeof o[m] !== 'function')
            return false;
        }
    }
  }
  return true;
}

var o = {
  m1: function () {

  },
  m2: function () {

  }
};
var o2 = function () {

};
o2.prototype = {
  constructor: function () {
    return 'o2-prototype'
  },
  m3: function () {

  }
};
console.log(o2.prototype);
console.log('鸭式辩型：', quackImplements(o, o2));

// 对于字符串直接检查命名方法
// 对于对象检查是否有同名方法
// 对于函数检查构造函数的原型对象中是否有相同方法
//
// 在js中很多函数都不对对象做类型检测只是关心这些对象能做什么
// eg: Array的prototype利用了鸭型辩型，arguments是伪数组
(function () {
  var arr = Array.prototype.slice.apply(arguments);
  console.log(arr)
})(1, 2, 3);

var a3 = Array.prototype.slice.apply({0: 1, 1: 2, 2: 3, length: 3});
console.log(a3);

// 使用鸭式辨型可以扩大对象的使用范围
// eg：让普通对象具有数组的push方法
Function.prototype.unCurrying = function () {
  return this.call.bind(this);
};
// 等于同
Function.prototype.unCurrying = function () {
  var f = this;
  return function () {
    var args = arguments;
    return f.apply(args[0], [].slice.call(args, 1));
  }
};

var push = Array.prototype.push.unCurrying(),
  obj = {};
push(obj, 'one', 'two');
console.log(obj);
console.log('length: ' + obj.length);
