/**
 * Created by yvan on 2016-06-28.
 */
var func=new function(){this.a="func"}
var myfunc=function(x,y){
    var a="myfunc";
    alert(this.a);
    alert(x + y);
}
myfunc.call(func,"var"," fun");// "func" "var fun"
myfunc.apply(func,["var"," fun"]);// "func" "var fun"