'use strict';
/*
 ECMA-262第5版中有两种属性：数据属性和访问器属性
 访问器属性默认值：
 Configurable=true, Enumerable=true, Get=undefined, Set=undefined
 */

var book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});

book.year = 2005;
console.log(book.edition); // 2005-2004+1=2
