function isArray(obj) {
  return Object.prototype.toString.call(obj) == '[object Array]'
}

var arr = [1, 2];
console.log(isArray(arr));
console.log(arr.toString());
console.log(Object.prototype.toString.call(arr));
console.log('=================================');

var arr2 = new Array(1, 2);
console.log(isArray(arr2));
console.log(arr2.toString());
console.log(Object.prototype.toString.call(arr2));
console.log('=================================');

var arr3 = Array(1, 2);
console.log(isArray(arr3));
console.log(arr3.toString());
console.log(Object.prototype.toString.call(arr3));
