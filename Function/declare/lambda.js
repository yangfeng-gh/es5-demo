/*
函数表达式需要先声明后使用,因为存在变量声明提升，但不存在变量赋值提升，sayHi在被赋值前值为undefined
 */

sayHi(); // 错误：函数还不存在
var sayHi = function() {
  console.log('hi');
};
