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

function A(name) {
  this.name = name
}

var a1 = new A('a1');
var a2 = new A('a2');

console.log('a1.constructor === A: ', a1.constructor === A); // true
console.log('a2.constructor === A: ', a2.constructor === A); // true
console.log('A.constructor === A: ', A.constructor); //false


function Person(name) {
  this.name = name;
};

Person.prototype = {
  getName: function() {
    return this.name;
  }
};

// 上面的代码相当于
/*
Person.prototype = new Object({
    getName: function() {
        return this.name;
    }
});
*/

var p = new Person('tom');

console.log('p.constructor === Person: ', p.constructor === Person); // false
console.log('Person.prototype.constructor === Person: ', Person.prototype.constructor === Person); // false
console.log('p.constructor.prototype.constructor === Person: ', p.constructor.prototype.constructor === Person); // false

// 纠正自定义对象原型后，新创建对象的constructor指向异常的问题
Person.prototype.constructor = Person;
console.log('\n重新覆盖Person.prototype.constructor后: ============');
console.log('p.constructor === Person: ', p.constructor === Person); // true
console.log('Person.prototype.constructor === Person: ', Person.prototype.constructor === Person); // true
console.log('p.constructor.prototype.constructor === Person: ', p.constructor.prototype.constructor === Person); // true

