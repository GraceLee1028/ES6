/**
 * Created by lea on 2017/11/8.
 */
//1、Handling parameter default values【默认参数】
function info(age,name="grace"){
    console.log(name);
}
info();

//Handling named parameters【tip:参数name与传递进来的对象中的属性名name需要一一对应】
function selectEntries({ name=0, end=-1, step=1 }) {
    console.log(name);
}
selectEntries({name:"Jane"});
//selectEntries();//error: Cannot match against 'undefined' or 'null'.针对这一问题给出下面函数的处理方案
function selectEntries2({ name="lea", end=-1, step=1 }={}) {
    console.log(name);
}
selectEntries2();
//

//2、From arguments to rest parameters【...】
function allArgs(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
allArgs(2,3,4,5);
//es5
const max = Math.max.apply(Math, [-1, 5, 11, 3]);
console.log(max);
//es6
const max2 = Math.max(...[-1, 5, 11, 3]);
console.log(max2);

//向一个数组添加一个数组的数据【改变原数组】
let arr = ['lea'];
//es5
arr.push.apply(arr,['a','b']);
console.log(arr);

//es6
arr.push(...['a','b']);
console.log(arr);

//合并数组
//es5 concat,【返回新的数组，不影响原数组】
console.log(arr.concat([2,4]));

//es6
console.log([...arr,...['cd']]);