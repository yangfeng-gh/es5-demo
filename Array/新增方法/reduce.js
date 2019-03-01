/*
array.reduce(callback[, initialValue])
callback函数接受4个参数：之前值、当前值、索引值以及数组本身。
initialValue参数可选，表示初始值。若指定，则当作最初使用的previous值；
如果缺省，则使用数组的第一个元素作为previous初始值，同时current往后排一位，相比有initialValue值少一次迭代。
*/

var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
    console.log('previous: %s, current: %s', previous, current);
    return previous + current;
}, 9);

console.log(sum); // 10


// 有了reduce，我们可以轻松实现二维数组的扁平化：

var matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// 二维数组扁平化
var flatten = matrix.reduce(function (previous, current) {
    console.log(previous, current);
    return previous.concat(current);
});

console.log(flatten); // [1, 2, 3, 4, 5, 6]

// 兼容处理IE6-IE8：
if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (callback, initialValue ) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}
