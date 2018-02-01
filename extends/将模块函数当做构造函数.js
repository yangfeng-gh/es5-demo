/**
 * 将模块函数当做构造函数
 */

/*
var collections;
if (!collections) collections = {};
collections.sets = {};
(function namespace() {
    //...这里省略很多代码...
    //将共用api导出到上面创建的命名空间对象上
    collections.sets.AbstractSet = AbstractSet;
    collections.sets.NotSet = NotSet; //...
});
*/

/*
var collections;
if (!collections) collections = {};
collections.sets = (new function namespace(){
    this.AbstractSet = AbstractSet;
    this.NotSet = NotSet;
}());
*/

var collections;
if (!collections) collections = {};
collections.sets = (new function namespace() {
  console.log(this);
  var AbstractSet = new Date();
  this.AbstractSet = AbstractSet;
}());
console.log(collections.sets.AbstractSet);
