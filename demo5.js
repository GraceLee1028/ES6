/**
 * Created by Administrator on 2016/9/2.
 */
    //类的篇章
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `${this.x}, ${this.y}`;
    }
}
class ColorPoint extends  Point{
    constructor(x, y, color){
        super(x, y);//父类的执行
        this.color = color;
    }
    toString(){
        return super.toString() + ' in ' + this.color;
    }
}
console.log("constructor,类构造器, 主要是能通过 super() 调用父构造器");
console.log(ColorPoint === ColorPoint.prototype.constructor);  //结果： true
//类定义的结果就是一个函数：
//只能通过 new 调用类，不能通过函数调用
console.log(typeof Point);
//使用类：
let cp = new ColorPoint(20, 10, 'red');
console.log(cp.toString());// 结果： 20, 10 in red
console.log(cp instanceof  ColorPoint);
console.log(cp instanceof  Point);

//类的定义： 上面的类是类声明， 下面介绍类表达式

const MyClass = class Me{
    getClassName(){
        return Me.name;  //返回这个类的名称
    }
};
let inst = new MyClass();
console.log(inst.getClassName()); //结果;  Me
//console.log(Me.name);  //保存，Me is not defined

