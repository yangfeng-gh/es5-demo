/**
 * setTimeout问题研究
 */

setTimeout(function(){
    foo();
}, 1000);

const foo = () => {
    console.log('hello');
};