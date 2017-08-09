/**
 * Created by Administrator on 2017-8-9.
 */
var s = (function(foo){//foo相当于{foo:{bar:1}}这个对象，这个对象，只有foo属性，没有bar属性
    return typeof foo.bar;
})({ foo: { bar: 1 } });
console.log(s);//undefined
