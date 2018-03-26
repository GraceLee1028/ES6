/**
 * Created by lea on 2018/3/26.
 */
//模板字符串【注意符号和内部的class处引用】
let cn = 'red';
let html0 = `<p class="${cn}">
    模板字符串，gogogo</p>`;
console.log(html0);

//Object.assign():把对象合并
let o = {name:"lea"};
let o0 = {age:12};
Object.assign(o,o0);//对象o0合并给o
console.log(o);
console.log(o0);
//箭头函数
let sum = ()=>{};
let sum1 = num1=>num1+num1;
let sum2 = (num1,num2)=>{return num1+num2};
console.log(sum);
console.log(sum1);
console.log(sum2);
//forEach的应用
let arr = [1,3,5,7,11];
arr.forEach((value,index)=>{ value+=value; console.log(value)});
//map()：【原数组不会改变】
var arr0 = arr.map((value)=>{
    return value+value;
});
console.log(arr);//结果：[1,3,5,7,11]
console.log(arr0);//结果：[2, 6, 10, 14, 22]

