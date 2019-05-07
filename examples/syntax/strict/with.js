// "use strict";

// 1. 禁止使用with语句
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
  console.log(a, x, y);
}



