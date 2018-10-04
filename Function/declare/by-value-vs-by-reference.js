/*
当函数参数为引用类型时，采用传址策略
 */
var myObj = {
    status: 'before'
};
function testByReference(obj) {
    obj.status = 'after';
}

testByReference(myObj);

console.log(myObj.status); // after

/*
当函数参数为简单类型时，采用传值策略
 */
var val = 1;

function testByValue(val) {
  val = 2;
}

testByValue(val);
console.log(val); // 1


