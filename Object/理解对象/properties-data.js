'use strict';
/*
 ECMA-262第5版中有两种属性：数据属性和访问器属性
 在调用Object.defineProperty()方法时，如果不指定，
 默认值：writable=false, configurable=false, enumerable=false, value=''
 */

/**
 * 演示writable属性及defineProperty()
 */
var person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'tom'
});
console.log(person.name); // tom
person.name = 'james';
console.log(person.name); // 修改不成功，因为name的writable属性为false

/**
 * 演示configurable属性
 * configurable=false时，不能从对象中删除属性，在严格模式下会导致错误
 * 不可以多次调用defineProperty，即configurable一旦设置为false，就不能再设置为true了。
 */
var teacher = {};
Object.defineProperty(teacher, 'name', {
  configurable: false,
  value: 'linus'
});
console.log(teacher.name);
// delete teacher.name;

Object.defineProperty(teacher, 'name', {
  configurable: true,
  value: 'Linus Torvalds'
});
