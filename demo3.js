/**
 * Created by Administrator on 2016/8/24.
 */
var  a = "离a";
console.log(a.length);
console.log(a.charAt(0));
console.log(a.charCodeAt(0));
console.log(a.codePointAt(0));
console.log(a.charCodeAt(0).toString());
console.log(a.codePointAt(0).toString());

for(let char of a){
    console.log(char);
}

function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("我"));
console.log(is32Bit("a"));

//字符串的新增的方法
var s = 'Hello world!';
console.log(s.startsWith('Hello'));// true
console.log(s.endsWith('!'));// true
//是否包含
console.log(s.includes('o'));// true
//如果repeat的参数是负数或者Infinity，会报错。
var s2 = s.repeat(2);
console.log(s2);

// 字符串中嵌入变量
var name = "Bob", time = "today";
function getName(){
    return "lee";
}
console.log(`Hello ${name}, how are you ${time}?`);
console.log(`hi,my name is ${getName()}`);
