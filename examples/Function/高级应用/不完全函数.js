/**
 * 不完全函数：利用已有的函数来定义新的函数
 * 这是一种编程技巧
 */

//实现一个工具函数将类数组对象（或对象）转换为真正的数组
function array(a, n) {
  return Array.prototype.slice.call(a, n || 0);
}

//包含函数实参在左，嵌套函数实参在右
function partialLeft(f /*, ...*/) {
  var args = arguments; //保存外部的实参数组
  return function() {
    var a = array(args, 1);
    a = a.concat(array(arguments));
    return f.apply(this, a);
  }
}

//包含函数实参在右，嵌套函数实参在左
function partialRight(f /*, ...*/) {
  var args = arguments;
  return function(){
    var a = array(arguments);
    a = a.concat(array(args, 1));
    return f.apply(this, a);
  }
}

//实参列表中的undefined值都被填充
function partial(f /*, ...*/) {
  var args = arguments;
  return function() {
    var a = array(args, 1);
    var i=0, j=0;
    //遍历args, 从内部实参填充undefined值
    for(; i< a.length; i++)
      if(a[i] === undefined)
        a[i] = arguments[j++];
    //现在将剩下的内部实参都追加进去
    a = a.concat(array(arguments, j));
    return f.apply(this, a);
  };
}

// 1. 定义一个已有函数
var f = function(x, y, z){return x*(y-z)};
// 2. 基于已有函数f定义新的函数partialLeft, partialRight, partial,这就是不完全函数的编程技巧
console.log(partialLeft(f, 2)(3, 4)); //-2: 2*(3-4)
console.log(partialRight(f, 2)(3, 4)); //6: 3*(4-2)
console.log(partial(f, undefined, 2)(3, 4));//-6: 3*(2-4)
