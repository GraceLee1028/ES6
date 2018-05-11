/**
 * Created by lea on 2018/3/26.
 */
console.log("+++++++++++++++++++++++++++++++");
let o = new Object();
console.log(o);//结果：{}；【继承object的原型】
//Object.create():创建新对象【静态函数】
//创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
let o1 = Object.create(null);
console.log(o1);//结果：{}；【不会继承任何属性和方法】
let o2 = Object.create({name:"lea"});
console.log(o2);//结果：{};【继承了属性name和object的原型】


//创建一个普通的空对象【如：{}，new Object()】
let o0 = Object.create(Object.prototype);
console.log(o0);//结果：{}；【继承object的原型】


console.log("+++++++++++++++++++++++++++++++");
function Person(name){
    this.name = name;
}
Person.prototype = {
    constructor:Person,
    sayHi:function(){
        console.log("你好，"+this.name);
    }
};
var p1 = new Person("lea");
console.log(p1);


console.log("+++++++++++++++++++++++++++++++");
//构造函数【】
function Confession(txt='你走吧'){
    this.txt = txt;
}
//此处的constructor指向object
Confession.prototype = {
    say(){
        console.log(this.txt);
    }
};
let cfs1 = new Confession('快走');
console.log(cfs1);
//此处把constructor指向Confession
Confession.prototype.constructor = Confession;
console.log(cfs1);