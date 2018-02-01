function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

//通过构造函数创建的对象，使用构造函数的prototype属性作为原型
var tom = new Person('tom', 'male');
console.log('通过构造函数创建的对象，使用构造函数的prototype属性作为原型:' + Person.prototype.isPrototypeOf(tom));
console.log(Object.prototype.isPrototypeOf(tom));

//通过对象直接量创建的对象,使用Object.prototype作为原型
var literalObj = {name: 'lucy', gender: 'female'};
console.log('通过对象直接量创建的对象,使用Object.prototype作为原型:' + Object.prototype.isPrototypeOf(literalObj));

//通过Object.create()创建的对象，使用第一个参数作为原型
var p = {x: 1};
var o = Object.create(p);
console.log('通过Object.create()创建的对象，使用第一个参数作为原型:' + p.isPrototypeOf(p));
