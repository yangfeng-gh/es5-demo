'use strict';
/*
 ECMA-262第5版中有两种属性：数据属性和访问器属性
 */
var person = {};
/*
在调用Object.defineProperty()时，如果不指定，configurable, enumerable, writable的默认值都是false。
 */
Object.defineProperty(person, 'name', {
  configurable: false, //省略不写默认值false，不可配置
  enumerable: false, //省略不定默认值false，不可遍历
  writable: false, //省略不定默认值false，只读
  value: 'Linus Torvalds'
});

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// person.name = 'Steve Jobs'; //修改只读属性在非严格模式下被忽略，在严格模式下会抛出错误
// console.log(person.name);

var person = {};
Object.defineProperty(person, 'name', {
  enumerable: true,
  writable: true,
  value: 'Bill Gates'
});
console.log(person.name); //Bill Gates
person.name = 'James Gosling';
console.log(person.name); //James Gosling

/*
把configurable设置为false,表示不能从对象中删除属性。
如果对这个属性调用delete,则在非严格模式下会忽略，在严格模式下会导致错误。
而且一旦定义为不可配置就不能再把它变回可配置了。
 */
var animal = {};
Object.defineProperty(animal, 'name', {
  configurable: false,
  enumerable: true,
  writable: true,
  value: 'tiger'
});
// delete animal.name; //TypeError: Cannot delete property 'name'

/*
//可以多次调用Object.defineProperty()修改同一个属性，但在把configurable设置为false之后就会有限制了(不能再设置为true)。
Object.defineProperty(animal, 'name', {
  configurable: true,
  value: 'lion'
}); //TypeError: Cannot redefine property: name
*/

/*
直接在对象上定义的属性，configurable, enumerable, writable都被设置为true
 */
animal.age = 2;
animal.name = 'lion';
console.log(animal);
