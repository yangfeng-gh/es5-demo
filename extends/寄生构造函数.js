function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.sons = ["Tom", "John"];
  //在sayName()方法不存在的情况下，添加到原型中
  if (typeof this.sayName != "function") {
    Bird.prototype.sayname = function () {
      console.log(this.name);
    };
  }
}

/**
 * [寄生构造函数] 用于扩展已有构造函数
 * 需要原生对象的增强对象有2种方法：
 * 1.修改原生对象的构造函数（不可取）
 * 2.创建原生对象的寄生构造函数 (即不修改原生构造函数，在新的构造函数中扩展原生对象实例返回)
 */
function SpecArray() {
  var values = new Array();//创建数组
  // var values = [];
  values.push.apply(values, arguments);//添加值
  // values.push(arguments);
  values.toPipedString = function () {
    return this.join("|");
  };
  return values;//返回数组
}

var colors = new SpecArray('red', 'green', 'blue');
console.log(colors.toPipedString());

