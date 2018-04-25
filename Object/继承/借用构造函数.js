function SuperType() {
  this.property = 'super';
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = 'sub';
}

//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue());
