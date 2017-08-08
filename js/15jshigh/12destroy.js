/**
 * Created by Administrator on 2017-8-8.
 */
function City(){}
function one(){
    var a = new City;
    return function(){
        return a;
    }
}
var s1 = one();
var s2 = one();

