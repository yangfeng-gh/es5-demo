/**
 * 独立性是模块的重要特点，模块内部最好不与程序的其他部分交互
 * 因此在模块内部要调用全局变量的话，必须显式地将其作为依赖输入模块
 */
// 模块module1依赖jquery
var module2 = (function ($) {
  var arr = $.map([0, 1, 2], function (n) {
    return n + 2;
  });
  return arr;
})(jQuery);

console.log(module2);
