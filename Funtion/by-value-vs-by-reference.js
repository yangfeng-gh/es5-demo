/**
 * js传值还是传址
 */
var myObj = {
    status: 'before'
}
function testByReferenceOrByValue(obj) {
    obj.status = 'after';
}

testByReferenceOrByValue(myObj);

console.log(myObj.status);
