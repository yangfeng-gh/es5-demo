// "use strict";

// 不允许对arguments赋值
// arguments++; // SyntaxError: Unexpected eval or arguments in strict mode

var obj = {
  set p(arguments) {}
};

// arguments不再追踪参数的变化
function f(a) {
  a = 2;
  console.log(a, arguments[0]);
}

f(1); // 正常模式为[2,2]

function f2(a) {
  "use strict";
  a = 2;
  console.log(a, arguments[0]);
}

f2(1); // 严格模式为[2,1]

// 禁止使用arguments.callee
var f3 = function() { console.log(arguments.callee); };
f3(); // 报错
