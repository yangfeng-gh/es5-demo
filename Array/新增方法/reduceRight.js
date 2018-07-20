/**
 * array.reduceRight(callback[, initialValue])
 * 与reduce差异在于reduceRight是从数组的末尾开始实现
 */

// 兼容处理IE6-IE8：

if (typeof Array.prototype.reduceRight != "function") {
    Array.prototype.reduceRight = function (callback, initialValue ) {
        var length = this.length, k = length - 1, previous = initialValue;
        if (typeof initialValue === "undefined") {
            previous = this[length - 1];
            k--;
        }
        if (typeof callback === "function") {
            for (k; k > -1; k-=1) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}

var data = [1, 2, 3, 4];
var specialDiff = data.reduceRight(function (previous, current, index) {
    if (index == 0) {
        return previous + current;
    }
    return previous - current;
});

console.log(specialDiff); // 0

