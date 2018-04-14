//该函数为模拟给对象o增加了私有属性name,外部无法绕过私有属性存取器方法来设置name的值
//如果提供了判定函数，setter方法就会用它来检测参数的合法性，然后再存储它
//如果判定函数返回false,setter方法抛出一个异常
function addPrivateProperty(o, name, predicate) {
var value;
o["get"+name] = function() {
return value;
};
o["set"+name] = function(v){
if(predicate && !predicate(v))
throw Error("set" + name + ": invalid value " + v);
else
value = v;
};
}
var o = {};
addPrivateProperty(o, "Name", function (x) {
return typeof x == "string";
});
o.setName("Frank");
console.log(o.getName());
o.setName(0);
