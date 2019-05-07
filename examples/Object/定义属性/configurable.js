/*
configurable特性表示对象的属性是否可以被删除，以及除writable特性外的其他特性是否可以被修改。
 */
var o = {};
Object.defineProperty(o, "a", { get : function(){return 1;},
  configurable : false } );

// throws a TypeError
Object.defineProperty(o, "a", {configurable : true});
// throws a TypeError
Object.defineProperty(o, "a", {enumerable : true});
// throws a TypeError (set was undefined previously)
Object.defineProperty(o, "a", {set : function(){}});
// throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", {get : function(){return 1;}});
// throws a TypeError
Object.defineProperty(o, "a", {value : 12});

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
