/**
 * Created by yvan on 2016-06-29.
 */
function classof(o) {
    if (o === 'null') return "Null";
    if (o === 'undefined') return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
console.log(classof(null)); //Null
console.log(classof(undefined)); //Undefined
console.log(classof(1));//Number
console.log(classof(true));//Boolean
console.log(classof(""));//String
console.log(classof({}));//Object
console.log(classof([]));//Array
console.log(classof( /./));//RegExp
console.log(classof(new Date()));//Date
//console.log(classof(window));//Window(firefox) //global(chrome)
function f(){}
console.log(classof(new f()));//Object