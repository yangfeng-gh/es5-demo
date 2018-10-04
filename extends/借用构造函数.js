function Parent() {
  this.pValues = ['xiaomin', 'yvan', 'xiaoqian', 'jialiang', 'qinteng'];
}

function Child() {
  // 调用父类构造方法之前添加子类属性
  this.gender = 'female';
  Parent.call(this);
  // 调用父类构造方法之后添加子类属性
  this.age = 18;
}

Child.prototype = new Parent();
var child = new Child();
child.pValues.push('liangliang');
var child2 = new Child();
// 借用构造函数解决了多个实例共享原型属性的问题
// 但方法都在构造函数中定义，函数复用无从谈起，因此，借用构造函数的模式也很少单独使用
console.log(JSON.stringify(child2.pValues));
console.log(JSON.stringify(child2.gender));
console.log(JSON.stringify(child2.age));
