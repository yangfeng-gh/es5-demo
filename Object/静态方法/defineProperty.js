/*
功能：
方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
如果不指定configurable, writable, enumerable ，则这些属性默认值为false，
如果不指定value, get, set，则这些属性默认值为undefined

语法: Object.defineProperty(obj, prop, descriptor)

obj: 需要被操作的目标对象
prop: 目标对象需要定义或修改的属性的名称
descriptor: 将被定义或修改的属性的描述符
 */
var obj = new Object();

Object.defineProperty(obj, 'name', {
  configurable: false,
  writable: true,
  enumerable: true,
  value: '张三'
});

console.log(obj.name);  //张三
