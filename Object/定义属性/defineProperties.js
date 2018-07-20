/**
 * 通过描述符一次定义多个属性。
 * Object.defineProperties(),这个方法接收两个参数：第一个
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
      return this._year;
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004
      }
    }
  }
});

