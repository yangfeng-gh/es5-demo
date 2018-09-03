var scope = "global";

function constructFunction() {
  var scope = "local";
  return new Function("return scope");
}

function constructFunction2() {
  var scope = "local";
  return new Function("var scope = 'inner';return scope");
}

var result = constructFunction()(); // => "global", 搜索到全局变量
var result2 = constructFunction2()(); // => "inner"，搜索到构造函数参数中定义的变量
// 由于js变量的作用域是在编译时决定而不是运行时，而Function构造函数是在运行时动态地创建并编译函数，
// 这就导致在编译时通过Function构造函数创建的函数对象并不存在，而运行时无法确定其作用域，
// 因此动态创建的函数只会搜索全局和Function构造函数参数中定义的变量
console.log(result, result2);

var f = new Function("x", "y", "return x*y;");
var f2 = new Function("console.log('没有参数函数')");
console.log(f());
f2();
