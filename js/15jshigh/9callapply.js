/**
 * Created by Administrator on 2017-8-8.
 */
var name = "window上";
function say(city, word){
    var name = "函数内";
    console.log(this.name,city, word);
}

say("乐乐","你好");

var person = {name:"coyote"};
//apply第一个参数制定了函数运行时的this对象
say.apply(person,["乐乐","你好"]);
say.call(person,"乐乐","你好");
var newSay = say.bind(person);
newSay("city","word");
var newSay2 = say.bind(person,"city");
newSay2("word");
