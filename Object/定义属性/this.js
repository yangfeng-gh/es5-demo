/**
 * Created by yvan on 2016-07-28.
 */
var o = Object.create({id: 1, name: 'tom'});
o.age = 19;
console.log(o);

o.print = function(obj) {
    Object.assign(obj, o);
    console.log(JSON.stringify(obj));
    obj.up.callbackup();
    obj.down.callbackdown();
};

o.print({
    up: {
        callbackup: function() {
            upCb(this);
        }
    },
    down: {
        callbackdown: function() {
            downCb(this);
        }
    }
});

function downCb(that) {
    console.log(JSON.stringify(that));
}

function upCb(that) {
    console.log(JSON.stringify(that));
}
