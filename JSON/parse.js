/**
 * JSON.parse(text [, reviver])
 */

// 如果我们想确保解析的值是个整数，我们可以使用reviver方法。
var result = JSON.parse('{"a": 1, "b": "2"}', function(key, value){
    if (typeof value == 'string'){
        return parseInt(value);
    } else {
        return value;
    }
})

console.log(result);