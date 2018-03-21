/**
 * array.forEach(callback,[ thisObject])
 * callback(value, index ,array)
 * 遍历数组元素，忽略空元素，可以在回调中操作数组元素，不返回值
 */

// 对于古董浏览器，如IE6-IE8
if (typeof Array.prototype.forEach != "function") {
    Array.prototype.forEach = function (fn, context) {
        for (var k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
                fn.call(context, this[k], k, this);
            }
        }
    };
}

[1, 2 ,3, 4].forEach(console.log);

/*
对比jQuery中的$.each方法：

$.each([], function(index, value, Array) {
    // ...
});
*/


/*forEach不会遍历纯粹“占着官位吃空饷”的元素的*/
var array = [1, 2, 3];

delete array[1]; // 移除 2
console.log(array); // "1,,3"

console.log(array.length); // but the length is still 3

array.forEach(console.log); // 弹出的仅仅是1和3

/*如果这第2个可选参数不指定，则使用全局对象代替（在浏览器是为window），严格模式下甚至是undefined.*/
var database = {
    users: ["张含韵", "江一燕", "李小璐"],
    sendEmail: function (user) {
        if (this.isValidUser(user)) {
            console.log("你好，" + user);
        } else {
            console.log("抱歉，"+ user +"，你不是本家人");
        }
    },
    isValidUser: function (user) {
        return /^张/.test(user);
    }
};

// 结果：
// 你好，张含韵
// 抱歉，江一燕，你不是本家人
// 抱歉，李小璐，你不是本家
// 给每个人法邮件
// database.users.forEach(  // database.users中人遍历
//     database.sendEmail/*,    // 发送邮件
//     database          */     // 使用database代替上面标红的this
// );

database.sendEmail(database.users);
