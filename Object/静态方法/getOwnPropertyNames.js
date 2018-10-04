// 定义一个数组
var arr = ["a", "b", "c"];

// 定义一个 类数组对象
var obj = { 0: "a", 1: "b", 2: "c"};

//定义一个 不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

// 打印结果
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]
