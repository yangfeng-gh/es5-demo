function ShowColor(param1,param2){
this.getColor=function(){
document.write(this.color+"<br/>Two Params : "+param1+" ; "+param2);
}
}

var obj = new Object;
obj.color='Red';
ShowColor.call(obj,'p1','p2');

obj.getColor();
