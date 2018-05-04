var name = 'The Window';

var object = {
  name: 'My Object',

  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
};

console.log(object.getNameFunc()()); // My Object（在非严格模式下）
