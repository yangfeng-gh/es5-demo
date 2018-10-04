// 变量声明提升, variable-hoisting
var foo = 'abc';
!function (val) {
  foo = val; // 如果没有变量声明提升，则此处对全局作用域中的foo赋值
  console.log('函数作用域中的foo = ' + foo);
  var foo;
}('123');
console.log('全局作用域中的foo = ' + foo); // 全局作用域中foo并未改变

// 当作用域链中存在同名的函数和变量时，函数优先级高于变量
console.log(f);

function f() {}
var f = 0;
