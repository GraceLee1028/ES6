/**
 * Created by lea on 2017/11/8.
 */
const arr = [1,2,3];
//1、From for to forEach() to for-of
//es5
arr.forEach(function(item){
    "use strict";
    console.log(item);
});
//es6
for(let item of arr){  //形成Block作用域
    console.log(item);
}
//console.log(item);//error:item is not defined.

//2、entries()
for(let [index,item] of arr.entries()){
    console.log(`item${index}:${item}`);
}
