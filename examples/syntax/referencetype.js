var a = {}, b = {};
console.log('object a === object b: ' + (a == b));
console.log('object a === object b: ' + (a === b));

var a = [], b = [];
console.log('array a === array b: ' + (a == b));
console.log('array a === array b: ' + (a === b));

var a = [];
b = a;
console.log('array a === array b: ' + (a == b));
console.log('array a === array b: ' + (a === b));
