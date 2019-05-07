// 2. 在严格模式中，所有的变量都要先声明，如果给一个未声明的变量、函数、函数参数、catch从句参数或全局对象的属性赋值，将会抛出一个引用错误
'use strict';

// 给一个未声明的变量赋值
/*
myVar = 'abc';
console.log(myVar);
*/

// 给一个未声明的函数赋值
/*
myFunc = function() { // ReferenceError: myFunc is not defined
  console.log('myFunc');
};
*/



