/**
 * array.some(callback,[ thisObject]);
 * some要求至少有1个值让callback返回true就可以了
 */

var scores = [5, 8, 3, 10];
var current = 7;

function higherThanCurrent(score) {
    return score > current;
}

if (scores.some(higherThanCurrent)) {
    console.log("朕准了！");
}

// IE6-IE8扩展如下：

if (typeof Array.prototype.some != "function") {
  Array.prototype.some = function (fn, context) {
	var passed = false;
	if (typeof fn === "function") {
   	  for (var k = 0, length = this.length; k < length; k++) {
		  if (passed === true) break;
		  passed = !!fn.call(context, this[k], k, this);
	  }
    }
	return passed;
  };
}