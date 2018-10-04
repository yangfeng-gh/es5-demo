/**
* 组合继承主要思想：
* 通过借用父类构造函数继承属性
* 通过原型链继承方法
*/
function Parent() {
this.pValues = ['yvan', 'lucy'];
}
function Child(v) {
// 继承属性
Parent.call(this);
this.v=v;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.method = function() {
console.log('Child原型方法');
}
var c1 = new Child('yvan');
c1.pValues.push('lily');
var c2 = new Child('丰');
console.log(`c1.pValues: ${JSON.stringify(c1.pValues)}`);
console.log(`c2.pValues: ${JSON.stringify(c2.pValues)}`);
console.log(`c1.v: ${c1.v}`);
console.log(`c2.v: ${c2.v}`);
c1.method();
c2.method();
