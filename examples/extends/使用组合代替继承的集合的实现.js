/**
 使用组合代替继承的集合的实现
 */

var FilteredSet = Set.extend(
  function FilteredSet(set, filter) {//构造方法
    this.set = set;
    this.filter = filter;
  }, {
    //实例方法
    add: function () {
      //如果已有过滤器，直接使用它
      if (this.filter) {
        for (var i = 0; i < arguments.length; i++) {
          var v = arguments[i];
          if (!this.filter(v))
            throw new Error("FilteredSet: value " + v + " rejected by filter");
        }

        //调用set中的add()方法
        this.set.add.apply(this.set, arguments);
        return this;
      }
    },
    //剩下的方法都保持不变
    remove: function () {
      this.set.remove.apply(this.set, arguments);
      return this;
    },
    contains: function (v) {
      return this.set.contains(v);
    },
    size: function () {
      return this.set.size();
    },
    foreach: function (f, c) {
      this.set.foreach(f, c);
    }
  }
);
