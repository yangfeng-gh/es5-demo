/**
 * 借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型
 * 封装创建对象过程的函数
 * @param 原型对象
 * @returns 新创建的对象
 */
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

/**
 * 封装继承原型过程的函数
 * @param subType 子类型
 * @param superType 父类型
 */
function inheritPrototype(subType, superType) {
  // 创建原型对象
  var prototype = createObj(superType.prototype);
  prototype.constructor = subType;
  prototype.sayName = function () {
    console.log(this.name);
  };
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.friends = ['Linus Torvalds', 'Steve Jobs'];
}

function SubType(name, age) {
  //借用父类型的构造函数
  SuperType.call(this, name);
  //子类型扩展的属性
  this.age = age;
  //使用动态原型模式封装自定义类型原型方法
  if (!this.sayAge) {
    this.sayAge = function() {
      console.log(this.age);
    };
  }
}

//继承
inheritPrototype(SubType, SuperType);

//测试
var subType = new SubType('Bjarne Stroustrup', 30);
subType.sayName();
subType.sayAge();
