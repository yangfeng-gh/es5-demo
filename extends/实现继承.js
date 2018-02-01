/**
 * Created by yvan on 2016-06-28.
 */
// 实现继承
function Animal(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    }
}
function Cat(name){
    Animal.call(this, name);
}
var cat = new Cat("Black Cat");
cat.showName();