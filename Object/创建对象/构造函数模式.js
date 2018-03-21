/**
 * 与工厂模式不同之处：
 * 1、没有显式地创建对象
 * 2、直接将属性和方法赋给了this对象
 * 3、没有return语句
 *
 * 构造函数的问题：每个方法都要在每个实例上重新创建一遍
 */

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  }
}

/*
  这种方法终须使用new操作符调用构造函数，实际上会经历以下4个步骤：
  1、创建一个新对象；
  2、将构造函数的作用域赋给新对象（this指向了这个新对象）
  3、执行构造函数中的代码（为这个对象添加属性）
  4、返回新对象
 */
var person1 = new Person('linus', 29, 'Software Engineer');
console.log(person1);
var person2 = new Person('james', 28, 'Doctor');
console.log(person2);

// 作为普通函数调用
Person('tom', 20, 'Doctor');

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, 'Kristen', 25, 'Nurse');
o.sayName();

