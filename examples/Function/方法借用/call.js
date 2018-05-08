/**
 * Created by yvan on 2016-06-28.
 */
function add(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
add.call(sub, 3, 1);
add.call(null, 5,2);
// 调用add(5,2),以'sub','null'的身份

function Animal(){
    this.name = "Animal";
    this.showName = function(){
        console.log(this.name);
    }
}
function Cat(){
    this.name = "Cat";
}
var animal = new Animal();
var cat = new Cat();

animal.showName.call(cat); //输出‘Cat’
//以cat的身份调用animal的showName方法，对象冒充

