/**
 * 工厂模式
 * 解决了创建多个相似对象的问题
 * 但存在对象识别的问题（即无法标识一个对象的类型）
 */

function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name)
  };
  return o;
}

var person1 = createPerson('linus', 20, 'Software Engineer');
var person2 = createPerson('james', 21, 'Doctor');
person1.sayName();
person2.sayName();
