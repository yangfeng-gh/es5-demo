/*
寄生构造函数模式：parasitic
这种模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象。
与工厂模式一模一样，只是创建对象时使用了new操作符

适用场景：
不修改原型对象，基于原型对象扩展一个具有额外方法的特殊对象。

问题：
这种方法创建的对象与构造函数原型属性没有关系，即与工厂模式一样存在对象类型识别问题。
 */

function SpecialArray() {
  //创建数组
  var values = new Array();
  //添加值, apply的目的仅仅是为了方便批量向数组中添加值
  values.push.apply(values, arguments);
  //添加方法
  values.toPipedString = function() {
    return this.join('|');
  };
  //返回数组
  return values; //重写调用构造函数返回的值
}

var colors = new SpecialArray('red', 'green', 'blue');
colors.push('pink');
console.log(colors.toPipedString()); //red|green|blue
console.log(Array.prototype.isPrototypeOf(colors)); //true
console.log(SpecialArray.prototype.isPrototypeOf(colors)); //false
console.log(Object.getPrototypeOf(colors) instanceof SpecialArray); //false
