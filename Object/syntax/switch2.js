/**
 * Created by yvan on 2016-07-28.
 */

const A = 1;
const B = 2;
function toggle(val) {
    switch(val) {
        case A:
            console.log(1);
            break;
        case B:
            console.log(2);
            break;
        default:
            console.log(3);
    }
}

toggle();

