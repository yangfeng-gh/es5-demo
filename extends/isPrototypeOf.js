function Parent() {

}
function Parent2() {

}
function Children() {
  this.cFeild = 'children';
}

Children.prototype = new Parent();
var children = new Children();

console.log('Parent.prototype,isPrototypeOf(children): ' + Parent.prototype.isPrototypeOf(children));
console.log('Parent2.prototype,isPrototypeOf(children): ' + Parent2.prototype.isPrototypeOf(children));
console.log('children instanceof Parent: ' + (children instanceof Parent));
console.log('children instanceof Parent2: ' + (children instanceof Parent2));
