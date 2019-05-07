var a = 2;
var b = 5;

function foo() {
  console.log(a); // 会输出2还是3？
}

function bar() {
  var a = 3;
  foo(); // foo定义在全局，所以只会在全局作用域查找a
}

bar(); // 2

function bar2() {
  var a = 3;
  function foo2() {
    console.log('a=%d, b=%d', a, b);
  }
  foo2(); // foo2定义在bar2内部，所以会先在bar2内部查找a,没有找到才会查找全局
}

bar2(); // 3
