/**
 * Created by lea on 2017/11/8.
 */
const arr = [1,2,3];

//1、From for to forEach() to for-of
//es5
arr.forEach(function(item){
    "use strict";
    console.log(item);//1 2 3
});

//es6
for(let item of arr){  //形成Block作用域
    console.log(item);//1 2 3
}
//console.log(item);//error:item is not defined.

//2、entries()
for(let [index,item] of arr.entries()){
    console.log(`item${index}:${item}`);
    //item0:1
    //item1:2
    //item2:3
}
//③、concat():合并数组es5
//扩展运算符
console.log(...[1,3.5]);//输出：1 3.5
let arr1 = [34,23];
let arr2 = [45,63,23];

console.log([...arr1,...arr2]);//[ 34, 23, 45, 63, 23 ]

//④、Array.from()：将两类对象转为为真正的数组
let arr3 = {
    '0':'lea',//这里要注意key为num
    '2':24,
    length:4
};
console.log(Array.from(arr3));//[ 'lea', undefined, 24, undefined ]

//⑤、Array.of方法用于将一组值，转换为数组。
console.log(Array.of(1,5,8));//[ 1, 5, 8 ]

//find()：
let arr4 = [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 4;
});
console.log(arr4);//输出：10;【会找到符合条件的某项】

//includes():
console.log([1, 2, 3].includes(2));//true