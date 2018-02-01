var f = new Function("x","y","return x*y;");

var f2 = new Function("console.log('没有参数函数')");

// 1.Function()构造函数允许javascript在运行时动态地创建并编译函数。
// 2.每次调用Function()构造函数都会解析函数体，并创建新的函数对象。如果是在一个循环或多次调用的函数中
// 执行这个构造函数，执行效率会受影响。相比之下，循环中的嵌套函数和函数定义表达式则不会每次执行都重新编译
// 3.Function()创建的函数并不是使用词法作用域，函数体代码的编译总是会在顶层函数执行，如下例:
var scope = "global";
function constructFunction() {
var scope = "local";
return new Function("return scope"); //无法捕获局部作用域
}
constructFunction()(); // => "global"
// 由于js变量的作用域是在编译时决定而不是运行时，而Function()是在运行时动态地创建并编译函数
// 因此编译时Funtion()并不存在，而运行时不确定决定该函数的作用域，所以动态创建的函数只会搜索全局和函数体内的变量