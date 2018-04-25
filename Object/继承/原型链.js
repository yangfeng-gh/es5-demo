/*
原型链继承是ECMAScript中实现继承的主要方法

基本思想：
让一个引用类型继承另一个引用类型的属性和方法
 */

function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subProperty = false;
}

//继承SuperType
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSubValue = function () {
  return this.subProperty;
};
//重写超类型中的方法
SubType.prototype.getSuperValue = function () {
  return false;
};

var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
console.log(instance.constructor); //SuperType

console.log(instance instanceof Object); //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType); //true

console.log(Object.prototype.isPrototypeOf(instance)); //true
console.log(SuperType.prototype.isPrototypeOf(instance)); //true
console.log(SubType.prototype.isPrototypeOf(instance)); //true
