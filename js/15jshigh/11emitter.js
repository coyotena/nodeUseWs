/**
 * Created by Administrator on 2017-8-8.
 */
var EventEmitter = require("events");
var e = new EventEmitter();
EventEmitter.prototype.once = function once(type, listener) {
    //判断listener是否是函数
    if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
    //其实绑定的是此函数内部声明的一个函数
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
function _onceWrap(target, type, listener) {
    //是否已经触发过
    var fired = false;
    //声明了一个新的函数
    function g() {
        //移除监听
        target.removeListener(type, g);
        //如果没有触发过
        if (!fired) {
            fired = true;//状态改为已触发
            //调用一下原始监听函数
            listener.apply(target, arguments);
        }
    }
    g.listener = listener;
    return g;
}
