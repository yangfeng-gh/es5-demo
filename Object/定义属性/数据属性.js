/*
 ECMA-262第5版中有两种属性：数据属性和访问器属性
 */
var person = {};
Object.defineProperty(person, 'name', {
  writable: false, // 只读属性不可修改
  value: 'Linus Torvalds'
});

console.log(person.name);
person.name = 'Steve Jobs'; // 修改只读属性在非严格模式下被忽略，在严格模式下会抛出错误
console.log(person.name);

var person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'tom'
});
console.log(person.name); // tom
person.name = 'james';
console.log(person.name); // 修改不成功，因为name的writable属性为false

/*
把configurable设置为false,表示不能从对象中删除属性。
如果对这个属性调用delete,则在非严格模式下会忽略，在严格模式下会导致错误。
而且一旦定义为不可配置就不能再把它变回可配置了。
 */
var animal = {};
Object.defineProperty(animal, 'name', {
  configurable: false,
  value: 'tiger'
});
delete animal.name;

/*
可以多次调用Object.defineProperty()修改同一个属性，但在把configurable设置为false之后就会有限制了。
在调用Object.defineProperty()时，如果不指定，configurable, enumerable, writable的默认值都是false。
 */
Object.defineProperty(animal, 'name', {
  configurable: false,
  value: 'tiger'
});

/*
直接在对象上定义的属性，configurable, enumerable, writable都被设置为true
 */
animal.age = 2;
