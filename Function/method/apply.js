/**
 * 定义一个人类
 * @param name
 * @param age
 * @constructor
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * 定义一个学生类
 * @param name
 * @param age
 * @param grade
 * @constructor
 */
function Student(name, age, grade) {
  Person.apply(this, arguments);
  this.grade = grade;
}

//创建一个学生类
var student = new Student("tom", 21, "grade one");
//测试
console.log("name: " + student.name + "\n" + "age: " + student.age + "\n" + "grade: " + student.grade);
//学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.

/**
 * 求数组中元素最大值
 * 思路：
 * 1. apply可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)
 * 2. 利用apply将Math.max(param1,param2,param3…)转换为Math.max([param1,param2])
 */
var arr = [5, 3, 8, 6, 2];
var max = Math.max.apply(null, arr);
console.log(max);
