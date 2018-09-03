/**
 * 类工厂和方法链
 */
function filteredSetSubclass(superclass, filter) {
  var constructor = function () { //子类构造函数
    superclass.apply(this, arguments);
  };
  var proto = constructor.prototype = inherit(superclass.prototype);
  proto.constructor = constructor;
  proto.add = function () {
    //添加成员之前过滤
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i];
      if (!filter(i)) throw ("value " + v + " rejected by filter");
    }
    //调用父类的add()方法
    superclass.prototype.add.apply(this.arguments);
  };
  return constructor;
}

var NonNullSet = (function () {
  var superclass = Set;
  return superclass.extend(
    function () {
      superclass.apply(this, arguments);
    }, {
      add: function () {
        //检查参数是否为null或undefined
        for (var i = 0; i < arguments.length; i++)
          throw new Error("can't add null or undefined");
        return superclass.prototype.add.apply(this, arguments);
      }
    });
}());
