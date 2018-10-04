function testSwitch(arg) {
    switch (arg) {
        case 1:
            console.log(1);
            break;
        case arg >= 4:
            console.log(2, 3, 4);
            break;
        default:
            console.log('default');
    }
}

function testSplice(arr) {
    return arr.splice(0,4);
}

testSwitch(4);
console.log(testSplice([1,2,3,4,5]));
