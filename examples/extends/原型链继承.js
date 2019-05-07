function Parent() {
  this.pFeild = 'parent';
}
Parent.prototype.getParentValue = function (){
  return 'parentValue';
};
function Children() {
  this.cFeild = 'children';
}
Children.prototype = new Parent();
Children.prototype.getChildrenValue = function() {
  return 'childrenValue';
};

var children = new Children();

console.log('子类的属性：' + children.cFeild);
console.log('子类的方法：' + children.getChildrenValue());
console.log('从父类继承的属性：' + children.pFeild);
console.log('从父类继承的方法：' + children.getParentValue());
