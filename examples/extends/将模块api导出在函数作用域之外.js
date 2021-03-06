/**
 * 将模块api导出在函数作用域之外
 */
var collections;
if (collections) collections = {};
//定义sets模块
collections.sets = (function namespace() {
  //在这里定义多种“集合”类，使用局部变量和函数
  //...这里省略很多代码...
  //通过返回命名空间对象将api导出
  return {
    //导出的属性名：局部变量名
    AbstractSet: AbstractSet,
    NotSet: NotSet,
    AbstractEnumerableSet: SingletonSet,
    AbstractWritableSet: AbstractWritableSet,
    ArraySet: ArraySet
  };
}());
