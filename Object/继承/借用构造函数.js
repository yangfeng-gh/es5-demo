/**
 * 借用构造函数：在子类型构造函数中调用超类型构造函数
 */

function SuperType(colors) {
  this.colors = colors;
}

SuperType.prototype.toPipedString = function() {
  return this.colors.join('|');
};

function SubType() {
  //继承SuperType
  SuperType.call(this, ['cyan', 'magenta', 'yellow']);
  this.size = 'A'
}

var superType = new SuperType(['red', 'green', 'blue']);
var subType1 = new SubType();
subType1.colors.push('black');
console.log(subType1); //SubType { colors: [ 'cyan', 'magenta', 'yellow', 'black' ], size: 'A' }
console.log(superType.toPipedString()); //red|green|blue
// console.log(instance1.toPipedString()); //超类型原型中的方法子类型不可见

var subType2 = new SubType();
console.log(subType2); //SubType { colors: [ 'cyan', 'magenta', 'yellow' ], size: 'A' }
