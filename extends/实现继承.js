/**
 * 继承
 */
// 实现继承
function Animal(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    }
}

// 创建子类实例，利用子类实例调用父类构造函数（将父类的属性复制到子类实例中）
function Cat(name){
  Animal.call(this, name);
}
var cat = new Cat("Black Cat"); // 得到一个子类实例
console.log(cat instanceof Cat); // true
cat.showName();
