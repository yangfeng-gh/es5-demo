/**
 * 将模块函数当做构造函数
 */

var collections;
if (!collections) collections = {};
collections.sets = (new function namespace() {
  console.log(this);
  var AbstractSet = new Date();
  this.AbstractSet = AbstractSet;
}());
console.log(collections.sets.AbstractSet);
