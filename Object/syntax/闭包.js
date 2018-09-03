/**
 * 闭包就是能够读取其他函数内部变量的函数。
 * 定义在一个函数内部的函数
 * 闭包就是将函数内部和函数外部连接起来的一座桥梁。
 *
 * 闭包的作用：
 * 1. 读取函数内部的变量
 * 2. 让这些变量的值始终保持在内存中
 */

function f1(){
    var n=999;
    nAdd=function(){n+=1}
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
nAdd();
result(); // 1000

var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());


var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()());