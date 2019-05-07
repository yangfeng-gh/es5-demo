function strict(){
  // 函数级别严格模式语法
  'use strict';
  console.log(this);
  function nested() { return "And so am I!"; }
  return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() {
  console.log(this);
  return "I'm not strict.";
}

console.log(strict());
console.log(notStrict());
