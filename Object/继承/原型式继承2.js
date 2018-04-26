/**
 * 原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
 */
var person = {
  name: 'linus',
  friends: ['james', 'dennis']
};

var anotherPerson = Object.create(person);
anotherPerson.name = 'bill';
anotherPerson.friends.push('bjarne');

var yetAnotherPerson = Object.create(person, {
  name: {
    value: 'steve'
  }
});
yetAnotherPerson.friends.push('larry');

console.log(person.friends); // [ 'james', 'dennis', 'bjarne', 'larry' ]
console.log(yetAnotherPerson.name); // steve
