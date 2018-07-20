//dependencies
var bar = require('./lib/bar');

//methods
function myFunc() {
  bar();
  console.log('this is a commonjs moudle foo');
};

//exposed public method (single)
module.exports = myFunc;
