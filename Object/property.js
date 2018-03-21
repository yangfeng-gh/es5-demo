/**
 * //当给s1定义一个属性len时，ecma会将s1使用String()构造成包装对象（临时对象）,但是只能读取String类固有的属性，而忽略为String类设置属性的操作
 */

var s1 = "test"; //s1是原始类型的字符串
s1.len = 4;
var s2 = new String("test");
s2.len = 4;
console.log(s1.length); //4
console.log(s1.len); //undefined
console.log(s2.len); //4