/**
 * JSON.stringify(value [, replacer [, space]])
 */
// 如果我们需要改变值字符串化的方式，或是对我们选择的提供过滤，我们可以将其传给replacer函数。
// 例如，我们想过滤出即将被字符串化的对象中值为13的属性：
var nums = {
    "first": 7,
    "second": 14,
    "third": 13
}
// 如果replacer方法返回undefined, 则键值对就不会包含在最终的JSON中。
var luckyNums = JSON.stringify(nums, function(key, value){
    if (value == 13) {
        return undefined;
    } else {
        return value;
    }
});

console.log(luckyNums); // {"first":7,"second":14}

// 我们同样可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明了作缩进的JSON字符串或字符串每个水平上缩进的空格数。
// 如果参数是个超过10的数值，或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。
var luckyNums2 = JSON.stringify(nums, function(key, value) {
    if (value == 13) {
        return undefined;
    } else {
        return value;
    }
}, 4);

console.log(luckyNums2);