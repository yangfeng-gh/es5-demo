Function.prototype.getName = function () {
  return this.toString().match(/function\s*([^(]*)\(/)[1];
};

console.log(Array.getName());
