function A(name) {
    this.name = name
}

var a1 = new A('a1');
var a2 = new A('a2');

console.log('A.prototype === a1.__proto__: ', A.prototype === a1.__proto__);
console.log('A.prototype === a2.__proto__: ', A.prototype === a2.__proto__);