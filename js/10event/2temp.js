/**
 * Created by Administrator on 2017-7-27.
 */
function say(name,word){
    console.log(this.name,name,word);
}
say("小明","hello");
/*
任何参数绑定都可以使用bind
解决一些无法传参问题
* */

var newSay = say.bind(say,"小华");
newSay("1哈哈哈");



var obj = {name:"coyote"};
var newSay = say.bind(obj,"hello");
newSay("2world");

/*
say.bind(say,"小芳","我是")()
say.bind(null,"小李","里面")()
say.bind(undefined,"小马","月牙")()
*/


