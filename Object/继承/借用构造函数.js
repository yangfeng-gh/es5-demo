/**
 * 借用构造函数：在子类型构造函数中调用超类型构造函数
 */

function SuperType() {
  this.colors = ['red', 'green', 'blue'];
}

function SubType() {
  //继承SuperType
  SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); //[ 'red', 'green', 'blue', 'black' ]

var instance2 = new SubType();
console.log(instance2.colors); //[ 'red', 'green', 'blue' ]
