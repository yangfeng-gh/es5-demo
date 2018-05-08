/**
 * 字面量字符串对象
 */
var s1 = "test"; // s1是原始类型的字符串
s1.len = 4;
// 当给s1定义一个属性len时，ECMAScript会将s1使用String()构造成包装对象（临时对象）
// 但是只能读取从String类继承的属性，而忽略s1设置的自定义属性
console.log(s1.length); //4
console.log(s1.len); //undefined

var s2 = String("test");
s2.len = 4;
console.log(s2.len); //undefined

// 使用构造函数创建的字符串对象可以读取自定义属性
var s3 = new String("test");
s3.len = 4;
console.log(s3.len); //4
