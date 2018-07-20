function createFunctions() {
  var result = new Array();

  for (var i=0; i<10; i++) {
    result[i] = function() {
      return i;
    };
  }

  return result;
}

function createFunctions() {
  var result = new Array();

  for (var i=0; i<10; i++) {
    result[i] = function(num) {
      return function() {
        return num;
      }
    }(i);
  }

  return result;
}

var result = createFunctions();
console.log(result[0]()); // 10
