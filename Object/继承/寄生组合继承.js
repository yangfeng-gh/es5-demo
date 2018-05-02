function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = createObj(superType.prototype);
  prototype.constructor = subType;
  prototype.sayName = function () {
    console.log(this.name);
  };
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.friends = ['Linus Torvalds', 'Bjarne Stroustrup'];
}


function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var subType = new SubType('Dennis, Ritchie', 30);
subType.sayName();
subType.sayAge();
