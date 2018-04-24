/*
 与工厂模式不同之处：
 1、没有显式地创建对象
 2、直接将属性和方法赋给了this对象
 3、没有return语句
 构造函数的问题：每个方法都要在每个实例上重新创建一遍
 */

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  }
  // 等价于 this.sayName = new Function("console.log(this.name)")
}

/*
  这种方法终须使用new操作符调用构造函数，实际上会经历以下4个步骤：
  1、创建一个新对象；
  2、将构造函数的作用域赋给新对象（this指向了这个新对象）
  3、执行构造函数中的代码（为这个对象添加属性）
  4、返回新对象
 */
var person1 = new Person('linus', 29, 'Software Engineer');
var person2 = new Person('james', 28, 'Doctor');

// 对象的 constructor 属性最初是用来标识对象类型的
console.log('person1.constructor === Person: ', person1.constructor === Person);
console.log('person2.constructor === Person: ', person2.constructor === Person);

// 但是检测对象类型，还是 instanceof 操作符要更可靠一些
console.log('person1 instanceof Object: ', person1 instanceof Object); // 所有对象均继承自Object
console.log('person1 instanceof Person: ',person1 instanceof Person);
console.log('person2 instanceof Object: ',person2 instanceof Object);
console.log('person2 instanceof Person: ',person2 instanceof Person);

// 作为普通函数调用
Person('tom', 20, 'Doctor'); // 不使用new操作符，属性和方法都添加给Global对象了（在浏览器中就是 window 对象）

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, 'Kristen', 25, 'Nurse');
o.sayName();

