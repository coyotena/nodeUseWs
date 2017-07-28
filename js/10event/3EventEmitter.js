/**
 * Created by Administrator on 2017-7-28.
 */
function EventEmitter(){
    this.events = {};//初始化一个私有的属性
}
//type 绑定的事件名
//listener 事件发生后的监听
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type,listener){
    if(this.events[type]){
        this.events[type].push(listener);
    }else{
        this.events[type] = [listener];
    }
}
//自己实现
EventEmitter.prototype.once = function(type,listener){
    /*if(this.events[type]){
        this.events[type].push(listener);
    }else{
        this.events[type] = [listener];
    }*/
}
EventEmitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }

}
EventEmitter.prototype.removeListener = function(type,listener){
    if(this.events[type]){
        var listeners = this.events[type];
        for(var i = 0; i < listeners.length; i++){
            if(listeners[i] === listener){
                listeners.splice(i,1);
                return;
            }
        }
    }
}
EventEmitter.prototype.removeAllListeners = function(type,listener){
    if(this.events[type]){
        this.events[type] = [];
    }
}
module.exports = EventEmitter;
