/**
 * array.lastIndexOf(searchElement[, fromIndex])
 * 只是lastIndexOf是从字符串的末尾开始查找，而不是从开头。
 * 还有一个不同就是fromIndex的默认值是array.length - 1而不是0.
 */

// IE6扩展

if (typeof Array.prototype.lastIndexOf != "function") {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var index = -1, length = this.length;
        fromIndex = fromIndex * 1 || length - 1;

        for (var k = length - 1; k > -1; k-=1) {
            if (k <= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

var data = [2, 5, 7, 3, 5];

console.log(data.lastIndexOf(5)); // 4
console.log(data.lastIndexOf(5, 3)); // 1 (从后往前，索引值小于3的开始搜索)

console.log(data.lastIndexOf(4)); // -1 (未找到)