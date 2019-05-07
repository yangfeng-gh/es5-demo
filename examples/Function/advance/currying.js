/**
 * 第三版es6实现
 * @param fn
 * @param hole 占位符
 */
function currying(fn, hole) {
  const __len = fn.length;
  let args = [];
  return function h() {
    // 先把参数放入args数组
    args = [...args, ...Array.from(arguments)];
    // 如果长度超过原有函数参数列表长度，表示有占位
    let holeNum = args.length - __len;
    // 第一个占位符对应的肯定是__len位置的变量，循环将所有占位符替换
    for (let i = 0; i < holeNum; i++) {
      args[args.indexOf(hole)] = args[__len];
      args.splice(__len, 1)
    }
    // 如果没有占位符且参数数目已经够了
    if (args.length < __len || args.indexOf(hole) > -1) {
      return h
    } else {
      return fn.apply(null, args)
    }
  }
}

var add = function(x, y) {
  return x + y;
};
var myAdd = currying(add, '-');
myAdd();
