/*
 组合构造函数模式和原型模式:
 实例特有的属性和方法定义在构造函数中，实例共享的属性的方法定义在原型对象中
 问题：
 构造函数和原型分离，破坏了自定义类型的封装性
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['Linus Torvalds', 'Bill Gates', 'Steve Jobs'];
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name);
  }
};

var person1 = new Person('Linus', 19);
person1.friends.push('Dennis Ritchie', 'James Gosling');
console.log(person1.friends);

var person2 = new Person('Bill', 20);
person2.friends.push('Bjarne Stroustrup');
console.log(person2.friends);
