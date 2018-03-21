/**
 * 方式一：使用关键字new
 */

var person = new Object();
person.name = 'yvan';
person.age = 19;
person.job = 'Software Engineer';

person.sayName = function(){
  console.log(this.name);
};

person.sayName();

/**
 * 方式二：字面量形式
 */
var student = {
  name: 'james',
  age: 50,
  job: 'Java Engineer',
  sayName: function () {
    console.log(this.name)
  }
};

student.sayName();


