/**
 * 放大模式
 *
 * 应用场景：
 * 如果一个模块很大，必须分成几个部分来写，或者一个模块依赖另一个模块
 *
 * 实质：
 * 放大模式实质上就是给已有的模块添加方法
 */
var module1 = (function (mod) {
  mod.desc = function () {
    _count--;
  };

  return mod;
})(module1);

// mod是形参，module1是实参
// 为module1添加desc方法，然后返回新的module1模块


