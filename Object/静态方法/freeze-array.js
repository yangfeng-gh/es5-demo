/*
冻结对象
用Object.seal()密封的对象可以改变它们现有的属性。使用Object.freeze() 冻结的对象中现有属性是不可变的。
 */

var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新的属性会被添加, 已存在的属性可能会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';

// 在严格模式，如此行为将抛出 TypeErrors
function fail(){
  // 'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回true，因为quaxxor属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };

/*
冻结数组
 */
let a = [0];
Object.freeze(a); // 现在数组不能被修改了.

a[0]=1; // fails silently
a.push(2); // fails silently

// In strict mode such attempts will throw TypeErrors
function fail() {
  "use strict";
  a[0] = 1;
  a.push(2);
}

fail();

/*
被冻结的对象是不可变的。但也不总是这样。下例展示了冻结对象不是常量对象（浅冻结）。
 */
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'

/*

 */
// 深冻结函数.
function deepFreeze(obj) {

  // 取回定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}

obj2 = {
  internal: {}
};

deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
obj2.internal.a; // undefined

/*
在ES5中，如果这个方法的参数不是一个对象（一个原始值），那么它会导致 TypeError。在ES2015中，非对象参数将被视为要被冻结的普通对象，并被简单地返回。
 */
// Object.freeze(1);
// TypeError: 1 is not an object // ES5 code

// Object.freeze(1);
// 1                             // ES2015 code
