/**
 * 声明一个动物类型
 * @constructor
 */
function Animal() {
}

// 为动物类创建一个name属性
Animal.prototype.name = "动物类";
// 为动物类创建一个说话的fun  
Animal.prototype.say = function (content) {
  // 如果对象不存在name属性，则使用原型链的name
  if (!this.name) {
    this.name = this.__proto__.name;
  }
  console.log("我是" + this.name + ",我想说" + content);
};

/**
 * 声明一个鸟类
 * @constructor
 */
function Bird() {
}

// 设置鸟类继承动物类
Bird.prototype = new Animal();
// 设置superClass保存父类的方法属性  
Bird.prototype.superClass = new Animal();
// 设置鸟类的name属性  
Bird.prototype.name = "鸟类";
// 设置鸟类自己的 say 方法  
Bird.prototype.say = function () {
  console.log("这里是Bird类的say方法！");
};


/**
 * 声明一个乌鸦类
 * @constructor
 */
function Crow() {
}

// 设置乌鸦类继承鸟类
Crow.prototype = new Bird();
// 设置superClass保存父类的方法属性  
Crow.prototype.superClass = new Bird();
Crow.prototype.say = function () {
  console.log("乌鸦在此！");
}
// 实例化一个乌鸦对象  
var c = new Crow();
// 调用自身原型的say方法  
c.say(); // --> "乌鸦在此！"  

// 调用父类Bird的say方法  
c.superClass.say(); // --> "这里是Bird类的say方法！"  

// 直接调用最大的父类Animal的say方法(方法中的this指向Animal)  
c.superClass.superClass.say("我是一只乌鸦"); // --> "我是动物类,我想说我是一只乌鸦"  

// 用call调用最大的父类Animal的say方法(方法中的this指向c，但此时c并没有name属性，所以this.name用的是Bird的name)  
c.superClass.superClass.say.call(c, "我是一只乌鸦"); // --> "我是鸟类,我想说我是一只乌鸦"

// 给当前对象增加name属性  
c.name = "乌鸦本人";
// 还是用call调用最大父类Animal的say方法(此时c对象中已经有name属性);  
c.superClass.superClass.say.call(c, "我是一只乌鸦"); // --> "我是乌鸦本人,我想说我是一只乌鸦"