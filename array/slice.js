/**
 * slice([begin, [end]])
 * 可选参数:begin, 数组或类数组对象元素下标
 * 可选参数：end，数组或类数组对象元素下标
 * 返回一个从开始到结束（**\*不包括结束***）选择的数组的一部分**浅拷贝**到一个新数组对象。原始数组不会被修改
 *
 * 使用注意事项：
 * 1.不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组
 * 2.
 */

var a = ['zero', 'one', 'two', 'three'];

console.log(a.slice()); // 从0开始，直到最后一个元素（包含最后一个元素）
console.log(a.slice(1)); // 从1开始，直到最后一个元素（包含最后一个元素）
console.log(a.slice(1, 3)); // 复制下标1~3的元素（不包含3）
console.log(a); // slice函数不会改变原数组

/*
  返回现有数组的一部分
 */
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(fruits);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus);
// citrus contains ['Orange','Lemon']

// 使用slice方法从myCar中创建一个newCar.
var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

// 输出myCar, newCar,以及各自的myHonda对象引用的color属性.
console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log('myCar[0].color = ' + JSON.stringify(myCar[0].color));
console.log('newCar[0].color = ' + JSON.stringify(newCar[0].color));

/*
slice从myCar中创建一个新数组newCar.两个数组都包含了一个myHonda对象的引用。
当myHonda的color属性改变为purple,则两个数组中的对应元素都会随之改变.
 */
// 改变myHonda对象的color属性.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

//输出myCar, newCar中各自的myHonda对象引用的color属性.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

/*
slice方法可以用来将一个类数组（Array-like）对象/集合转换成一个数组。你只需将该方法绑定到这个对象上。
 */
{
  function list() {
    return Array.prototype.slice.call(arguments);
  }

  var list1 = list(1, 2, 3); // [1, 2, 3]
  console.log(list1);
}

/*
除了使用Array.prototype.slice.call(arguments),你也可以简单地的使用[].slice.call(arguments)来代替。
 */
{
  var unboundSlice = Array.prototype.slice;
  var slice = Function.prototype.call.bind(unboundSlice);

  function list() {
    return slice(arguments);
  }

  var list1 = list(1, 2, 3); // [1, 2, 3]
  console.log(list1);
}