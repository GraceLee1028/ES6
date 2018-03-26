/**
 * Created by lea on 2018/3/23.
 */
////4、From constructors to classes
////es5
//function Person1(name) {
//    this.name = name;
//}
//Person1.prototype.describe = function () {
//    console.log('Person1 called '+this.name);
//    return "person1 "+this.name;
//};
////es6
//class Person2{
//    constructor(name) {
//        this.name = name;
//    }
//    describe() {
//        console.log('Person2 called '+this.name);
//        return "person2 "+this.name;
//    }
//}
////let p1 = new Person1("LEA");
////let p2 = new Person1("JANE");
////p1.describe();
////p2.describe();
//
////5、Derived classes【派生类】
////es5
//function Wang(name,title){
//    "use strict";
//    Person1.call(this,name);//构造函数继承【super(name)】
//    this.title = title;
//}
//Wang.prototype = Object.create(Person1.prototype);//原型的继承
//Wang.prototype.constructor = Wang;//constructor依旧是Wang
//Wang.prototype.describe = function(){
//    "use strict";
//    return Person1.prototype.describe.call(this) + ' (' + this.title + ')';
//};
////es6
//class Lea extends Person2{
//    constructor(name,title){
//        "use strict";
//        super(name);//父类方法
//        this.title = title;
//    }
//    describe() {
//        return super.describe() + ' (' + this.title + ')';
//    }
//}
//let w = new Wang("wang","ES5:");
//let l = new Lea("lea","ES6:");
//console.log(w.describe());
//console.log(l.describe());
//console.log(l.name);

//1、class的基本运用
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log('你好，我叫'+this.name+',今年'+"岁，很高兴见到大家");
    }
}
console.log(Person);
let p = new Person('Anna',18);
console.log(p);
