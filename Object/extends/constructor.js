/**
 函数的prototype属性是一个对象，这个对象拥有唯一一个不可枚举属性constructor
 constructor属性的值是一个函数对象
 */

var F = function () {
}; // 函数对象
var p = F.prototype; // 这是F相关联的原型对象
var c = p.constructor; // 这是与原型相关联的函数
console.log(c === F); //true

var o = new F();
console.log(o.constructor === F); //true
console.log(o.constructor === F.prototype.constructor); // true
