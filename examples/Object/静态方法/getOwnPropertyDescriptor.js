/*
功能:
该方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

语法: Object.getOwnPropertyDescriptor(obj, prop)
obj: 需要查找的目标对象
prop: 目标对象内属性名称
 */

var book = {};

Object.defineProperties(book, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function() {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});

var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor);
var descriptor2 = Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor2);
