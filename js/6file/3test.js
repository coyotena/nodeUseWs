/**
 * Created by Administrator on 2017-7-19.
 */
/*
try catch语句只能捕获同步异常，不能捕获异步异常
*/
try{
    setTimeout(function(){
        throw error("error");
    },1000);
}catch (e){
    console.error(e);
}
console.log("test");
