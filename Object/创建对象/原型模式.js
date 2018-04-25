/**
 * 原型模式
 * 每个函数都有一个原型属性（prototype）,这个属性是一个指针，指向一个对象。
 * 这个对象是通过构造函数创建的所有实例对象的原型对象。
 * 使用原型对象的好处是：让特定类型的所有实例共享原型对象中的属性和方法。
 */

function Person() {
}

Person.prototype.name = 'Nicholas, 来自原型';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name)
};

var person1 = new Person();
person1.sayName(); //Nicholas

var person2 = new Person();
person1.sayName(); //Nicholas

console.log(person1.sayName === person2.sayName); //true
console.log(Person.prototype.isPrototypeOf(person1)); //true
console.log(Object.getPrototypeOf(person1) === Person.prototype); //true

/*
当实例对象的属性与其原型对象中属性同名时，则会屏蔽原型对象中的属性
 */
person1.name = 'Bill Gates, 来自实例'; //不能通过实例重写原型中的值
person1.sayName(); //Bill Gates, 来自实例
person2.sayName(); //Nicholas, 来自原型
console.log(person1.hasOwnProperty('name')); //true
console.log(person2.hasOwnProperty('name')); //false
delete person1.name; //恢复访问原型中的属性
person1.sayName(); //Nicholas, 来自原型

/*
原型与in操作符
for-in可遍历所有能够通过对象访问的可枚举属性，包括实例属性和原型属性
 */
console.log('name' in person1); //true
console.log('name' in person2); //true

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}

person1.name = 'Dennis Ritchie';
console.log(hasPrototypeProperty(person1, 'name')); //false
console.log(hasPrototypeProperty(person2, 'name')); //true

/*
所有开发人员定义的属性都是可枚举的。
但是在IE8及更早的版本中有一个bug, 它屏蔽了与原生不可枚举属性同名的实例属性
 */
var o = {
  toString: function () {
    return "My Object";
  }
};
for (var prop in o) {
  if (prop == "toString") {
    console.log("Found toString"); //在IE中不会显示
  }
}

/*
更简单的原型语法
 */
Person.prototype = {
  constructor: Person, //重设constructor虽然可以保证该属性值的正确，但是会导致[[enumerable]]特性被设置为true
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function() {
    console.log(this.name);
  }
};
//重设构造函数，只适用于ECMAScript5兼容的浏览器
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
});

/*
由于在原型中查找值的过程是一次搜索，因此我们对原型对象所做的任何修改都能够立即从实例上反映出来——即使是先创建了实例后修改原型也照样如此
 */
function People() {}
var people1 = new People();
People.prototype.sayHi = function () {
  console.log('hi');
};
people1.sayHi(); //hi

/*
原型对象的问题：
定义在原型对象上的属性值会被多个实例共享，当多个实例操作同一个属性时，它只能保存一个值，造成数据丢失，逻辑混乱。
 */
