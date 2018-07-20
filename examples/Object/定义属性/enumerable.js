var person = {};
Object.defineProperty(person, 'name', {
  value: 'Linus Torvalds' // 默认enumerable=false, 不能通过 for-in 循环返回属性
});

Object.defineProperty(person, 'age', {
  enumerable: true, // 能通过 for-in 循环返回属性
  value: 19
});

for (var p in person) {
  console.log(person[p])
}
