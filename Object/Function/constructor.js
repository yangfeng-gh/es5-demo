function A(name) {
    this.name = name
}

var a1 = new A('a1');
var a2 = new A('a2');

console.log('a1.constructor === A: ', a1.constructor === A); // true
console.log('a2.constructor === A: ', a2.constructor === A); // true
console.log('A.constructor === A: ', A.constructor === A); //false


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

var p = new Person('haorooms');

console.log('p.constructor === Person: ', p.constructor === Person); // false
console.log('Person.prototype.constructor === Person: ', Person.prototype.constructor === Person); // false
console.log('p.constructor.prototype.constructor === Person: ', p.constructor.prototype.constructor === Person); // false

console.log('p.constructor === Object: ', p.constructor === Object); // false
console.log('Person.prototype.constructor === Object: ', Person.prototype.constructor === Object); // false
console.log('p.constructor.prototype.constructor === Object: ', p.constructor.prototype.constructor === Object); // false

// 纠正自定义对象原型后，新创建对象的constructor指向异常的问题
Person.prototype.constructor = Person;
console.log('\n重新覆盖Person.prototype.constructor后: ============');
console.log('p.constructor === Person: ', p.constructor === Person); // false
console.log('Person.prototype.constructor === Person: ', Person.prototype.constructor === Person); // false
console.log('p.constructor.prototype.constructor === Person: ', p.constructor.prototype.constructor === Person); // false
