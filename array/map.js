/**
 * array.map(callback,[ thisObject]);
 * 在回调中返回处理后的新数组
 */

[].map(function(value, index, array) {
    // ...
});

// 求n的平方次幂
var data = [1, 2, 3, 4];

var arrayOfSquares = data.map(function (item) {
    return item * item;
});

console.log(arrayOfSquares); // 1, 4, 9, 16

// 与forEach的区别，callback中必须有 Generator.prototype.return 语句

var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

var emails = users.map(function (user) { return user.email; });

console.log(emails.join(", ")); // zhang@email.com, jiang@email.com, li@email.com

// Array.prototype扩展可以让IE6-IE8浏览器也支持map方法：

if (typeof Array.prototype.map != "function") {
    Array.prototype.map = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                arr.push(fn.call(context, this[k], k, this));
            }
        }
        return arr;
    };
}