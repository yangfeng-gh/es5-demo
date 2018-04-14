var p = {name: "yvan", gender:"male"};
var o = Object.create(p);

console.log("执行preventExtensions前: "+Object.isExtensible(o));
Object.preventExtensions(o);
console.log("执行preventExtensions后: "+Object.isExtensible(o));

console.log("执行seal前："+ Object.isSealed(o));
Object.seal(o);
console.log("执行seal后："+ Object.isSealed(o));

console.log("执行freeze前: "+Object.isFrozen(o));
Object.freeze(o);
console.log("执行freeze后: "+Object.isFrozen(o));
