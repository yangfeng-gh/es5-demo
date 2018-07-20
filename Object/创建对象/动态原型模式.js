/*
动态原型模式：
把所有信息都封装在构造函数中，在构造函数中初始化原型（仅在必要的情况下）
 */

function Person(name ,age) {
  this.name = name;
  this.age = age;
  //仅执行一次
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name);
    };
    console.log('init finish.');
  }
}

var person = new Person('Bjarne Stroustrup');
person.sayName();

var person2 = new Person('James Gosling');
person2.sayName();
