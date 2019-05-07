function ClassA(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  }
}

function ClassB(name, password) {
  this.ClassA = ClassA;
  this.ClassA(name);
  delete this.ClassA;

  this.password = password;
  this.getPassword = function () {
    return this.password;
  }
}

var b = new ClassB('www', '123');
console.log(b.getName());
