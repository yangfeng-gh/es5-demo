sayHi(); // 由于存在函数声明提升，不会抛出错误，执行之前会先读取下面的函数声明
function sayHi() {
  console.log('hi');
}
