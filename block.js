/**
 * Created by lea on 2017/11/8.
 */
/*From IIFEs to blocks */
//1、let,const声明都会产生块级作用域
{
    let name="lea";
}
//console.log(name);//error：name is not defined

//2、string interpolation
let age = 24;
console.log(`your age is ${age}`);

//3、Multi-line strings
let html = "<p>\
            you are a loser\
            <span>but i like</span>\
            <small>so,just go.</small>\
            </p>";

//4、arrow functions
function test(){
    console.log(()=>html);//Function
}
test();

const arr = [1,2,3];
const squares = arr.map(x=>x*x);
console.log(squares);

//5、Handling multiple return values
//arrays
const reg = /^(\d\d\d\d)-(\d\d)-(\d\d)$/i;
let [time,year,month,day]= reg.exec("2017-11-08");
console.log(time);
console.log(year);
console.log(month);
console.log(day);

// objects
let obj = {name:"lea",age:22};
let {name} = obj;
console.log(name);


