/**
 * Created by Administrator on 2017-8-3.
 */
//渲染模板
function render(tmpl, data){
    //用真实的值替换变量
    /*
     replace讲解：
     \w+外的括号是捕获括号，匹配到的字符暂时储存起来。
     第二个参数，此处是一个匿名函数，匿名函数有四个参数可以传入，但都不是必须要传的
     第一个参数：正则匹配到的字符
     第二个参数：捕获括号所捕获到的字符
     第三个参数：正则匹配到的每段字符的第一个字符的索引
     第四个参数：用于匹配的字符串主体
     */
    return tmpl.replace(/\{\{(\w+)\}\}/, function(input, group1){
        console.log(input);
        console.log(group1);
        return data[group1];
    });
}
var result = render('<h1>{{title}}</h1>', {title:"欢迎"});

console.log(result);