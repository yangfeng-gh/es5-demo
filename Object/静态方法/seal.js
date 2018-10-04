/*
Object.seal(obj)
封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。
 */

var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

console.log(o === obj); // true
console.log(Object.isSealed(obj)); // === true

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';

// But you can't convert data properties to accessors, or vice versa.
// 但是您无法将数据属性转换为访问器属性，反之亦然。
// Object.defineProperty(obj, 'foo', {
//   get: function() { return 'g'; }
// }); // throws a TypeError

// Now any changes, other than to property values, will fail.
// 现在除了属性值，任何改变都会失败
obj.quaxxor = 'the friendly duck';
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  // 'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
// Object.defineProperty(obj, 'ohai', {
//   value: 17
// });
// throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // changes existing property value
