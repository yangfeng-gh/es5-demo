//如果o实现了第一个参数之外的参数所表示的方法，则返回true
function quacks(o /*, ...*/) {
  for (var i=1; i<arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case 'string':
        if (typeof o[arg] !== 'function') return false;
        continue;
      case 'function':
        arg = arg.prototype;
      case 'object':
        for (m in arg) {
          if (typeof arg[m] !== 'function') continue;
          if (typeof o[m] !== 'function') return false;
        }
    }
  }
  //程序执行到这里，说明o实现了所有方法
  return true;
}
//这个方法不能应用于内置类，因为内置类的方法都是不可枚举的。
var o = {};
o.add = function (operand1, operand2) {
  return operand1 + operand2;
};
console.log('对象中应该有add方法：' + quacks(o, 'add')); //true
