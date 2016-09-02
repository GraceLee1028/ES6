/**
 * Created by Administrator on 2016/8/22.
 */
var a = new Date();
function f(){
    console.log(a);
    if(false){
        var a = "test";
    }
}
f();
//可使用多层作用域
//允许块级作用域的任意嵌套
{{{
    let a = 5;
    {let a = 10; let b = 10;}
    console.log(a);  //5 内层作用域不影响外层作用域
    //console.log(b);  //undefined 外层作用域无法读取内层作用域的变量
}}}

//IIFE的写法
(function(){
    var temp = "test";
})();
//块级作用域的写法
{
    let temp = "one";
}
//console.log(temp); // undefined

//块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
{
    function f(){console.log("test");}
    let a = "test";
    if(true){
        function f(){console.log("let's go");}
    }
    f();
}
//解构赋值
var [a = 1] = [];
console.log(a);  //1: 解构赋值允许指定默认值
var [b = 2] = [null];  //b = null; [只有赋的值不全等于undefined时，默认值不会生效]
var [c = 2] = [undefined];  //c = 2
// 对象的解构赋值  【对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；】
// 【而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。】
var d = {code: 0, message: "记住了", data: null};
var {code, message, data} = d;  //两边的名称要求相互对应
console.log(code);
console.log(message);
console.log(data);

const HTML = '<h1>测试</h1>';
console.log(HTML);
//HTML = "TEST";     //

//字符串的解构
var [h,e,l ,o] = 'test';
console.log(h);
console.log(e);
console.log(l);
console.log(o);

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
let {toString: k} = 123;
//k === Number.prototype.toString // true

let {toString: n} = true;
//n === Boolean.prototype.toString // true

console.log(k);
console.log(n);
//函数体内的默认值
function t({x = 0, type = 1}){  //指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
    console.log(type);
    console.log("x  -----"+x);
}
t({type: 2});

//遍历map机构
var map = new Map();
map.set("name", "lee");
map.set("age", 24);
for(let [key, value] of map){
    console.log("key ------"+ key + "--------val:  "+value);
}
//输入模块的指定方法
//加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
//const { SourceMapConsumer, SourceNode } = require("source-map");
