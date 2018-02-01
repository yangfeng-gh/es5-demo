/**
 * Created by yvan on 2016-06-28.
 */
// 在EcmaScript5中扩展了叫bind的方法（IE6,7,8不支持）
// 兼容处理
if (!Function.prototype.bind) {
    Function.prototype.bind = function(obj) {
        var _self = this
            ,args = arguments;
        return function() {
            _self.apply(obj, Array.prototype.slice.call(args, 1));
        }
    }
}

var o = {
    color: "#cd0000",
    element: $("#text"),
    events: function() {
        $("input[type='button']").addEventListener("click", function(e) {
            this.element.style.color = this.color;
        }.bind(this));
        return this;
    },
    init: function() {
        this.events();
    }
};
