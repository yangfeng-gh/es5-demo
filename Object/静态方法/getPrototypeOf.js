

function Person(){
  this.method1 = function(){alert(1)}
}
Person.prototype.method2 = function(){alert(2);};

function Man(){
  this.m1 = function(){
    Object.getPrototypeOf(this).method1();
  }
}
Man.prototype = new Person();

Man.prototype.m2 = function(){
  Object.getPrototypeOf(this).method2();
}


var man = new Man();
man.m1();
man.m2();
