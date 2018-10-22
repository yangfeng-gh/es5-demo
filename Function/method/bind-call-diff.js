var xw = {
  name : "小王",
  gender : "男",
  age : 24,
  say : function(school,grade) {
    console.log(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);
  }
};

var xh = {
  name : "小红",
  gender : "女",
  age : 18
};

// call后面的参数与say方法中是一一对应的，
// 而apply的第二个参数是一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

xw.say.call(xh,"实验小学","六年级");
xw.say.apply(xh,["实验小学","六年级郑州牛皮癣医院"]);

// 如果直接写xw.say.bind(xh)是不会有任何结果的，看到区别了吗？
// call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。
xw.say.bind();
// 它可以像call那样传参。
xw.say.bind(xh,"实验小学","六年级")();
// 由于bind返回的仍然是一个函数，所以我们还可以在调用的时候再进行传参。
xw.say.bind(xh)("实验小学","六年级");


