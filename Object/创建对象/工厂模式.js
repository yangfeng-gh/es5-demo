/**
 * 工厂模式的问题：存在对象识别的问题（即无法标识一个对象的类型）
 */

function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

var person1 = createPerson('linus', 20, 'Software Engineer');
var person2 = createPerson('james', 21, 'Doctor');
console.log(person1);
console.log(person2);
