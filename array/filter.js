/**
 * 指数组filter后，返回过滤后的新数组
 * array.filter(callback,[ thisObject]);
 */

var data = [0, 1, 2, 3];
var arrayFilter = data.filter(function(item) {
    return item;
});
console.log(arrayFilter); // [1, 2, 3]

// 低版本浏览器支持
if (typeof Array.prototype.filter != "function") {
    Array.prototype.filter = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }
        return arr;
    };
}
var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];
var emailsZhang = users
// 获得邮件
    .map(function (user) { return user.email; })
    // 筛选出zhang开头的邮件
    .filter(function(email) {  return /^zhang/.test(email); });

console.log(emailsZhang.join(", ")); // zhang@email.com

// 实际上，存在一些语法糖可以实现map+filter的效果，被称之为“数组简约式(Array comprehensions)”。
// 目前，仅FireFox浏览器可以实现
// var zhangEmails = [user.email for each (user in users) if (/^zhang/.test(user.email)) ];
// console.log(zhangEmails); // [zhang@email.com]