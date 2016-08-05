/**
 * Created by Administrator on 2016/8/4.
 */
let a = 9;
console.log(a);
//代码的计数器i，只在for循环体内有效
for(let i = 0; i < 10; i++){}
//console.log(i);  //i is undefined

//变量i是var声明的，在全局范围内都有效。所以每一次循环，
// 新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。
var b = [];
for(var i = 10; i >0; i--){
    b[i] = function(){
        console.log(i);
    }
}
b[6]();

//使用let，声明的变量仅在块级作用域内有效，最后输出的是6
//变量i是let声明的，当前的i只在本轮循环有效，
// 所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
var b = [];
for(let i = 10; i >0; i--){
    b[i] = function(){
        console.log(i);
    }
}
b[6]();

//let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
//console.log(foo);  //foo is not defined
let foo = 10;
console.log(foo);  //输出：  10

//暂时性死区【在代码块内，使用let命令声明变量之前，
// 该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）】
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var name = "lee";
/*
 ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，
 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 */
if(true){
    // TDZ开始
    console.log(name);   //name is not defined  【没有声明】
    let name = "Lee an";   //name绑定在了这个区域  【TDZ结束】

}

//不允许重复声明 § ?
//let不允许在相同作用域内，重复声明同一个变量
function test(){  //【重复声明报错】
    let age = 10;
    var age = 15;
}
test();

(function(){ //之前的
    var a = 10;
})();
//es6块级作用域
{
    let a = 10;
}
//块级作用域内声明的函数类似于let

//虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句
// 函数声明语句
{
    let a = 'secret';
    function f() {
        return a;
    }
}
// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}
