/*
使用原型链实现对原型属性和方法的继承；通过借用构造函数实现对实例属性和方法的继承。
 */

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  //借用构造函数继承
  SuperType.call(this, name);
  this.age = age;
}

//原型链继承
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var subType = new SubType('linus', 19);
subType.colors.push('black');
console.log(subType.colors); //[ 'red', 'green', 'blue', 'black' ]
subType.sayName(); //linus, 继承了父类原型中的方法
subType.sayAge(); //19，继承了子类原型中的方法

var subType2 = new SubType('james', 29);
console.log(subType2.colors); //[ 'red', 'green', 'blue' ]


