/**
 * Created by Administrator on 2016/9/2.
 */
//箭头函数
let x = 5;
let val = ()=> {return x*x;};
console.log(val());
(() => {
    console.log("123");
})();//自动执行箭头函数
let f = x => ({bar: 123});  //f表示是一个方法
console.log(f());  //执行f方法，返回{bar: 123}
//判断监听函数的类型
console.log(typeof (() => {})); //返回function


//对象字面量
let obj0 = {
    myMethod(x, y){//对象的方法

    }
};
//属性值的缩写
let first = 'jane';
let obj = {first};
console.log(obj);  //输出结果： { first: 'jane' }

//计算属性键
let obj1 = {
    [first]: true,
    ['h'+'i'](){
        return 'hello';
    }
};
console.log(obj1.hi());  //输出 hello
console.log(obj1.jane);  //输入  true

//object 中的新方法
let obj2 = {foo: 123};
//对obj2对象添加一个自有属性。
Object.assign(obj2, {bar: true});
console.log(JSON.stringify(obj2));