/*
对象冒充
 */
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
animal.showName.call(cat); //输出‘Cat’, 以cat的身份调用animal的showName方法


