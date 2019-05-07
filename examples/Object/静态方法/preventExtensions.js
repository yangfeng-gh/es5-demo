/*
Object.preventExtensions(obj)
将原对象变的不可扩展,并且返回原对象.
如果一个对象可以添加新的属性，则这个对象是可扩展的。
Object.preventExtensions()将对象标记为不再可扩展，因此它将永远不会具有超出它被标记为不可扩展的属性。
注意，一般来说，不可扩展对象的属性可能仍然可被删除。
尝试将新属性添加到不可扩展对象将静默失败或抛出TypeError（最常见但不排除其他情况，如在strict mode中）。
Object.preventExtensions()仅阻止添加自身的属性。但属性仍然可以添加到对象原型。
一旦使其不可扩展，就无法再对象进行扩展。
 */

var obj = {};
var obj2 = Object.preventExtensions(obj);
console.log(obj === obj2);  // true

// 字面量方式定义的对象默认是可扩展的.
var empty = {};
console.log(Object.isExtensible(empty)); // true
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false


// 使用Object.defineProperty方法为一个不可扩展的对象添加新属性会抛出异常.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
// Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出TypeError异常

// 在严格模式中,为一个不可扩展对象的新属性赋值会抛出TypeError异常.
function fail()
{
  // "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();

// 一个不可扩展对象的原型是不可更改的,
// __proto__是个非标准魔法属性,可以更改一个对象的原型.
var fixed = Object.preventExtensions({});
// fixed.__proto__ = { oh: "hai" }; // 抛出TypeError异常


// Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

// Object.preventExtensions(1);
// 1                             (ES2015 code)

//新对象默认是可扩展的无论何种方式创建的对象，这里使用的是字面量方式
var empty = {a:1};
console.log(Object.isExtensible(empty) === true);//true

//等价于 使用属性描述符
empty = Object.create({},{
  "a":{
    value : 1,
    configurable : true,//可配置
    enumerable : true,//可枚举
    writable : true//可写
  }
});
console.log(Object.isExtensible(empty)); //true

//对象是否可以扩展与对象的属性是否可以配置无关
empty = Object.create({},{
  "a":{
    value : 1,
    configurable : false,//不可配置
    enumerable : true,//可枚举
    writable : true//可写
  }
});
console.log(Object.isExtensible(empty)); //true


