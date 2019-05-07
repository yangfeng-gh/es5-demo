/*
概念：Object.create():是E5中提出的一种新的对象创建方式。
语法：Object.create(proto [, propertiesObject ])

参数
prototype
必需。  要用作原型的对象。  可以为 null。

descriptors
可选。  包含一个或多个属性描述符的 JavaScript 对象。

“数据属性”是可获取且可设置值的属性。
数据属性描述符包含 value 特性，以及 writable、enumerable 和 configurable 特性。
如果未指定最后三个特性，则它们默认为 false。
只要检索或设置该值，“访问器属性”就会调用用户提供的函数。
访问器属性描述符包含 set 特性和/或 get 特性。
有关详细信息，请参阅 Object.defineProperty 函数 (JavaScript)。

返回值
一个具有指定的内部原型且包含指定的属性（如果有）的新对象。

异常
如果满足下列任一条件，则将引发 TypeError 异常：

prototype 参数不是对象且不为 null。

descriptors 参数中的描述符具有 value 或 writable 特性，并具有 get 或 set 特性。

descriptors 参数中的描述符具有不为函数的 get 或 set 特性。
 */

/*
若要停止原型链，可以使用采用了 null prototype 参数的函数。  所创建的对象将没有原型。
 */
var newObj = Object.create(null, {
  size: {
    value: "large",
    enumerable: true
  },
  shape: {
    value: "round",
    enumerable: true
  }
});

console.log(newObj.size); // large
console.log(newObj.shape); // round
console.log(Object.getPrototypeOf(newObj)); // null

/*
用 Object.create实现类式继承
 */
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

/*
如果你希望能继承到多个对象，则可以使用混入的方式。
 */

function SuperClass() {

}

function OtherSuperClass() {

}

function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
  // do a thing
};

/*
Object.assign 会把  OtherSuperClass原型上的函数拷贝到 MyClass原型上，使 MyClass 的所有实例都可用 OtherSuperClass 的方法。
Object.assign 是在 ES2015 引入的，且可用 polyfilled。要支持旧浏览器的话，可用使用 jQuery.extend() 或者 _.assign()。
 */


/*
使用 Object.create 的 propertyObject参数
 */
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});

function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } });

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24;
console.log(o.p); //42

delete o.p;
//false

o.q = 12; // 添加一个新属性q
for (var prop in o) {
  console.log(prop); // 由于p不是可枚举的，所以只打印出"q"
}

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
