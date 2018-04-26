/**
 * 寄生式继承：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后返回对象。
 */
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  //创建给定对象的副本
  var clone = createObj(original); //createObj不是必须的，任何能够返回新对象的函数都适用于此模式
  //增强
  clone.sayHi = function() {
    console.log('hi');
  };
  //返回
  return clone;
}

var person = {
  name: 'Brendan',
  friends: ['james', 'dennis']
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();
