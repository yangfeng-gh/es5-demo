/*
稳妥构造函数模式：
稳妥对象（durable objects）：没有公共属性，而且其方法也不引用this

适应场景：
适合在一些安全的环境中（禁止使用this和new），或者在防止数据被其他应用程序（如Mashup）改动时使用
ADsafe, Caja

问题：
这种方法创建的对象与构造函数原型属性没有关系，即与工厂模式一样存在对象类型识别问题。
 */

function Person(name, age) {
  // 创建对象
  var o = new Object();

  //可在在这里定义私有变量和函数

  // 添加方法
  o.sayName = function () {
    console.log(name);
  };

  //返回对象
  return o;
}

var person = Person('linux torvalds', 30);
//变量person中保存的是一个稳妥对象，而除了调用sayName()方法外，没有别的方式可以访问其数据成员。
// 即使有其他代码会给这个对象添加方法或数据成员，但也不可能有别的办法访问传入到构造函数中的原始数据
person.sayName();
