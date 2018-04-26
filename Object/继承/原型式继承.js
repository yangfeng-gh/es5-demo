/**
 * 原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
 */
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: 'linus',
  friends: ['james', 'dennis']
};

var anotherPerson = createObj(person);
anotherPerson.name = 'bill';
anotherPerson.friends.push('bjarne');

var yetAnotherPerson = createObj(person);
yetAnotherPerson.name = 'steve';
yetAnotherPerson.friends.push('larry');

console.log(person); // { name: 'linus', friends: [ 'james', 'dennis', 'bjarne', 'larry' ] }
