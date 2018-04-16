/*
configurable: 能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。
enumerable: 能否通过for-in循环返回属性。
get: 在读取属性时调用的函数
set: 在写入属性时调用的函数
 */
var book = {
  _year: 2004,
  edition: 1
};
Object.defineProperty(book, "year", {
  get: function(){
    return this._year;
  },
  set: function(newValue){
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});
book.year = 2005;
console.log(book.edition); //2

/*
 直接定义在对象上的属性，访问器属性默认值：
 Configurable=true, Enumerable=true, Get=undefined, Set=undefined
 */
var book = {
  _year: 2004,
  edition: 1
};

// 定义访问器的旧有方法
book.__defineGetter__('year', function () {
  return this._year
});

book.__defineSetter__('year', function (newValue) {
  if (newValue > 2004) {
    this._year = newValue;
    this.edition += newValue - 2004;
  }
});

book.year = 2005;
console.log(book.edition); // 2005-2004+1=2
