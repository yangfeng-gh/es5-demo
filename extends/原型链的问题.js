function Parent() {
this.pValues = ['xiaomin', 'yvan', 'xiaoqian', 'jialiang', 'qintent'];
this.name = 'feilding'
}

function Child() {
this.cValues = ['小敏','杨峰','小倩','家良','秦腾'];
}

Child.prototype = new Parent();
var child = new Child();
child.name = '詹姆斯·高斯林'
child.pValues.push('liangliang');
var child2 = new Child();
// child2读取到了child设置的数据，即child2和child共享原型中的引用属性
console.log(`child.pValues:  ${JSON.stringify(child.pValues)}`);
console.log(`child2.pValues: ${JSON.stringify(child2.pValues)}`);
console.log(`child.name: ${JSON.stringify(child.name)}`);
console.log(`child2.name:  ${JSON.stringify(child2.name)}`);
