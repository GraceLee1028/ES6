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

//3、From function expressions in object literals to method definitions
const obj = {
    init(){
        "use strict";
        this.testGo();
    },
    testGo(){
        "use strict";
        console.log("go go go")
    }
};
obj.init();

//4、From constructors to classes
//es5
function Person1(name) {
    this.name = name;
}
Person1.prototype.describe = function () {
    console.log('Person1 called '+this.name);
    return "person1 "+this.name;
};
//es6
class Person2{
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Person2 called '+this.name);
        return "person2 "+this.name;
    }
}
//let p1 = new Person1("LEA");
//let p2 = new Person1("JANE");
//p1.describe();
//p2.describe();

//5、Derived classes【派生类】
//es5
function Wang(name,title){
    "use strict";
    Person1.call(this,name);//构造函数继承【super(name)】
    this.title = title;
}
Wang.prototype = Object.create(Person1.prototype);//原型的继承
Wang.prototype.constructor = Wang;//constructor依旧是Wang
Wang.prototype.describe = function(){
    "use strict";
    return Person1.prototype.describe.call(this) + ' (' + this.title + ')';
};
//es6
class Lea extends Person2{
    constructor(name,title){
        "use strict";
        super(name);//父类方法
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}
let w = new Wang("wang","ES5:");
let l = new Lea("lea","ES6:");
console.log(w.describe());
console.log(l.describe());