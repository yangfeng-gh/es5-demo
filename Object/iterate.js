var proto = {'one': 1, 'two': 2, 'three': 3};
var obj = Object.create(proto);
obj.four = 4;

{
  for (var k in obj) {
    console.log('%s => %s', k, obj[k])
  }

  console.log(k);
}

for (var k in obj) {
  if (obj.hasOwnProperty(k)) {
    console.log('使用hasOwnProperty过滤从原型继承的属性：%s', k);
  }
}