/*
注意:
1.getter和setter可以不同时使用,但在严格模式下只用其中一个,会抛出错误
2.数据描述符与存取描述符不可混用,会抛出错误
 */

var person = {};

Object.defineProperty(person, 'name', {
  configurable: false,
  writable: true,
  value: 'John'
}) ;

delete person.name;  // 严格模式下抛出错误

console.log(person.name); // 'John'  没有删除

Object.defineProperty(person, 'name', {
  // configurable: true  //报错
});

Object.defineProperty(person, 'name', {
  // enumerable: 2  //报错
});

Object.defineProperty(person, 'name', {
  writable: true  //报错
});

Object.defineProperty(person, 'name', {
  value: 'tom'  //报错
});

console.log(person.name);

/*
只有使用var, let等操作符才是定义变量，而不使用var，直接a=1;,这样a的含义为window的一个属性，并不是我们所说的变量的概念。
使用 var定义的任何变量，其configurable属性值都为false,定义对象也是一样
 */

var b = {
  name: 'bbb'
}
var d = Object.getOwnPropertyDescriptor(global, 'b');
console.log(d);

/*
使用字面量定义的对象,该对象内部的属性的数据描述符属性都为true
 */
