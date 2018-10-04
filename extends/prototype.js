function A(name) {
  this.name = name
}

var a1 = new A('a1');
var a2 = new A('a2');

console.log('A.prototype === a1.__proto__: ', A.prototype === a1.__proto__);
console.log('A.prototype === a2.__proto__: ', A.prototype === a2.__proto__);
console.log('Function.__proto__ === Function.prototype: ', Function.__proto__ === Function.prototype);
console.log('A.__proto__ === A.prototype: ', Function);

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

//通过构造函数创建的对象，使用构造函数的prototype属性作为原型
var tom = new Person('tom', 'male');
console.log('通过构造函数创建的对象，使用构造函数的prototype属性作为原型: ' + Person.prototype.isPrototypeOf(tom));
console.log(Object.prototype.isPrototypeOf(tom));

//通过对象直接量创建的对象,使用Object.prototype作为原型
var literalObj = {name: 'lucy', gender: 'female'};
console.log('通过对象直接量创建的对象,使用Object.prototype作为原型: ' + Object.prototype.isPrototypeOf(literalObj));

//通过Object.create()创建的对象，使用第一个参数作为原型
var p = {x: 1};
var o = Object.create(p);
console.log('通过Object.create()创建的对象，使用第一个参数作为原型: ' + p.isPrototypeOf(o));

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name); // Daisy
console.log(Object.getPrototypeOf(person).name); // Kevin

delete person.name;
console.log(person.name); // Kevin

// null 表示“没有对象”，即该处不应该有值。
// 所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。
console.log(Object.prototype.__proto__ === null); // true
