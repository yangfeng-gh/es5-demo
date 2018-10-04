function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

/**
 * 以下写法不正确
 */
LateBloomer.prototype.bloom2 = function() {
  var that = this;
  setTimeout(that.declare, 1000);
  // that.declare的值为会被作为匿名函数代入，而非作为that的declare方法调用
  // 因此，declare指向的函数中this会指向全局而不是LateBloomer对象。
};

LateBloomer.prototype.declare = function () {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
// after 1 second, triggers the 'declare' method

// 如果使用new运算符构造绑定函数，则忽略该值
new LateBloomer();
