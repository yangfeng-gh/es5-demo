/*
var arr = new Array();
arr[0] = 1;
arr["name"] = "数组1"; //不计算在arr.length中
arr[2] = 2;
arr["1"] = 3;
console.log(arr.length); //3
console.log(arr["name"]); //数组1

arr[-1.23] = -1.23; //创建一个名"-1.23"的属性
arr["100"] = 100; //数组的第101个元素
arr["1.000"] = 1.0 //给数组的第2个元素赋值

var arr1 = [,]; //此数组没有元素，长度是1
var arr2 = [undefined]; //包含一个值为undefined的元素
console.log(0 in arr1); //false
console.log(0 in arr2); //true

var a = [];
//添加元素
a[0] = "zero";
a.push("one","two"); //数组尾部添加元素
a[a.length] = "three"; //数组尾部添加元素
a.unshift("four"); //数组头部添加元素
console.log(a); //["four", "zero", "one", "two", "three"]
//删除元素
delete a[0];
a[1] = undefined;
console.log(a); //[1: undefined, 2: "one", 3: "two", 4: "three"]
*/
/*
var a = [1,2,3,4,5,6,7,8]
a.splice(4);        // 返回 [5,6,7,8]; a is [1,2,3,4]
a.splice(1,2);      // 返回 [2,3]; a is [1,4]
a.splice(1,1);      // Netscape/JavaScript 1.2 返回 4 ，应该返回 [4]
a.splice(1,0,2,3);  // Netscape/JavaScript 1.2 返回 undefined ，应该返回 []
*/
/*
var a = [null, undefined, "one"];
var len = a.length;
var a1 = [];
console.log(len); //3
for (var i=0; i<len; i++) {
if(!a[i]) continue; //判断数组元素是否合法
a1.push(a[i]);
}
console.log(a1); //["one"]

var a2 = [];
for (var i=0; i<len; i++) {
if(a[i] === undefined) continue; //判断数组元素是否存在或者值为undefined
a2.push(a[i]);
}
console.log(a2); //[null, "one"]

var a3 = [];
len = a.length = 4;
for (var i=0; i<len; i++) {
//if(!(i in a)) continue; //判断数组元素是否存在
a3.push(a[i]);
}
console.log(a3); //[null, undefined, "one", undefined],不存在的元素值为undefined
*/
/*
var data = [1, 2, 3, 4, 5];
var sumOfSquares = 0;
data.forEach(function(x) {
sumOfSquares += x*x;
});
console.log(sumOfSquares);
*/

/*
var a = [33, 4, 1111, 222];
a.sort(); //字母表顺序
a.sort(function (a, b) { //数值升序
Generator.prototype.return a-b;
});
a.sort(function (a, b) { //数值降序
Generator.prototype.return b-a;
});
console.log(a);
*/
/*
var a = [1, [2, "a"]];
console.log(a.toString());
console.log(a.join());
*/

var isArray = /*Function.isArray || */function (o) {
return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]"
};
var arr = [];
console.log(isArray(arr));
console.log(Object.prototype.toString.call(arr));
