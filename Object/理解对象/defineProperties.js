/**
 * 演示writable属性及defineProperties()
 */
var student = {};
Object.defineProperties(student, {
  name: {
    writable: false,
    value: 'james'
  }
});
console.log(student.name);
person.name = 'tom';
console.log(student.name);
