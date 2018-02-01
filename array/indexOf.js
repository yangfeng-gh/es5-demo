/**
 * array.indexOf(searchElement[, fromIndex])
 * 返回整数索引值，如果没有匹配（严格匹配），返回-1.
 * fromIndex可选，表示从这个位置开始搜索，若缺省或格式不合要求，使用默认值0，
 * 在FireFox下测试，发现使用字符串数值也是可以的，例如"3"和3都可以。
 */

// IE6-IE8扩展
if (typeof Array.prototype.indexOf != "function") {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var k = 0, length = this.length; k < length; k++) {
            if (k >= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x")); // 1 ("x"被忽略)
console.log(data.indexOf(5, "3")); // 4 (从3号位开始搜索)

console.log(data.indexOf(4)); // -1 (未找到)
console.log(data.indexOf("5")); // -1 (未找到，因为5 !== "5")