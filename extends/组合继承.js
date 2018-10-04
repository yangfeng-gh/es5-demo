/**
 * 组合继承
 * 组合继承(combination inheritance),有时候也叫做伪经典继承，指的是讲原型链和借用构造函数的技术组合到一起，从而发挥二者之长。
 * 思路：是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，通过在原型上定义方法来实现了函数复用，又能够保证每个实例都有自己的属性
 * 组合继承避免了原型链和借用构造函数的缺点，融合了他们的优点，成为JavaScript中最常用的继承方式。
 * 而且instancof和isPrototypeOf()也能够用于识别基于组合继承创建的对象。
 */

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};


function SubType(name, age) {
  // 借用构造函数，继承实例属性
  SuperType.call(this, name);
  // 实例属性
  this.age = age;
}

var instance1 = new SubType("Nicholas", 28);
// 继承并扩展了的实例属性
instance1.colors.push("black");
console.log(instance1.colors); //red,blue,green,black
console.log(instance1.age + '\n');
// instance1.sayName(); // TypeError: instance1.sayName is not a function


// 原型链继承
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var instance2 = new SubType("Greg", 29);
console.log(instance2.colors); //red,blue,green
// 继承了原型的属性和方法
instance2.sayName();
instance2.sayAge();
