/**
 * 问题：
 * 在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。
 * 可能存在第一个执行的模块依赖另一个未加载的模块
 *
 * 解决方案：
 * 宽放大模式（Loose augmentation）
 */
var module1 = (function (mod) {
  mod.desc = function () {
    var count = mod.getCount();
    mod.setCount(--count);
  };

  return mod;
})(window.module1 || {});

// 与放大模式不同的是，IIFE函数的实参为空时，程序不会出错
module1.desc();
module1.print();
