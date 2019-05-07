/**
 * 部分函数，又叫不完全函数：利用已有的函数来定义新的函数
 * 这是一种编程技巧
 */

//实现一个工具函数将类数组对象（或对象）转换为真正的数组
function array(a, n) {
  return Array.prototype.slice.call(a, n || 0);
}

/**
 * 包含函数实参在左，嵌套函数实参在右
 * @param f
 * @return {Function}
 */
function partialLeft(f /*, ...*/) {
  // 保存外部的实参数组
  // var args = arguments;
  // 对参数使用slice会阻止某些JavaScript引擎中的优化 (比如 V8 - 更多信息)。
  // 如果你关心性能，尝试通过遍历arguments对象来构造一个新的数组。另一种方法是使用被忽视的Array构造函数作为一个函数
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  return function () {
    var a = array(args, 1);
    a = a.concat(array(arguments));
    return f.apply(this, a);
  }
}

/**
 * 包含函数实参在右，嵌套函数实参在左
 * @param f
 * @return {Function}
 */
function partialRight(f /*, ...*/) {
  var args = arguments;
  return function () {
    var a = array(arguments);
    a = a.concat(array(args, 1));
    return f.apply(this, a);
  }
}

/**
 * 实参列表中的undefined值都被填充
 * @param f
 * @return {Function}
 */
function partial(f /*, ...*/) {
  var args = arguments;
  return function () {
    var a = array(args, 1);
    var i = 0, j = 0;
    //遍历args, 从内部实参填充undefined值
    for (; i < a.length; i++)
      if (a[i] === undefined)
        a[i] = arguments[j++];
    //现在将剩下的内部实参都追加进去
    a = a.concat(array(arguments, j));
    return f.apply(this, a);
  };
}

// 1. 定义一个已有函数
var f = function (x, y, z) {
  return x * (y - z)
};
// 2. 基于已有函数f定义新的函数partialLeft, partialRight, partial,这就是不完全函数的编程技巧
console.log(partialLeft(f, 2)(3, 4)); //-2: 2*(3-4)
console.log(partialRight(f, 2)(3, 4)); //6: 3*(4-2)
console.log(partial(f, undefined, 2)(3, 4));//-6: 3*(2-4)

// 我们也可以使用不完全调用的组合来重新组织平均数和标准差的代码，这种编程风格是非常纯粹的函数式编程：
// 我们要处理的数据
var data = [1, 1, 3, 5, 5];

/**
 * 求和
 * @param x
 * @param y
 * @return {*}
 */
var sum = function (x, y) {
  return x + y;
};

/**
 * 求积
 * @param x
 * @param y
 * @return {*}
 */
var product = function (x, y) {
  return x * y;
};

var neg = partial(product, -1);
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, .5);
var reciprocal = partial(Math.pow, undefined, -1);
var increment = partialLeft(sum, 1);
var cube_root = partialRight(Math.pow, 1 / 3);
String.prototype.first = partial(String.prototype.charAt, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);
// 测试
console.log(neg(9)); // 取反
console.log(square(2)); // 求幂
console.log(sqrt(4)); // 求平方根
console.log(reciprocal(4)); // 求倒数
console.log(increment(10)); // 自增
console.log(cube_root(8)); // 求立方根
console.log('abc'.first()); // 取首字母
console.log('abc'.last()); // 取尾字母

// 当将不完全调用和其他高阶函数整合在一起
/**
 * 返回新的函数h()将它所有的参数传给g(),然后将g()的返回值传入f()
 * 调用f()和g()时的this与调用h()时的this是同一个this
 * @param f {function}
 * @param g {function}
 * @return {function} 返回一个新的可以计算f(g(...))的函数h
 */
function compose(f, g) {
  return function() {
    // 需要给f()传入一个参数，所以使用call方法
    // 需要给g()传入一组参数，所以使用apply方法
    console.log(f.toString(), g.toString());
    return f.call(this, g.apply(this, arguments));
  }
}

var not = partialLeft(compose,function(x){ return !x;});
var even = function(x){ return x%2 ==0; };
var odd = not(even);
var isNumber = not(isNaN);
console.log(odd(3));



