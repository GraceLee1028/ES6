/**
 * Created by Administrator on 2016/8/5.
 */
//const声明一个只读的常量。一旦声明，常量的值就不能改变
const PI = 3.1415;
//PI = 3;
//const NUM;  //报错,常量必须要先声明并赋值。
//var PI = 3;  //不可重复声明
if(true){
    const MAX = 5;
}
//数组
//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），
// 那么将会报错。
//[模式匹配]
//完全解构
let [a, b, c] = [1, 3, 45];
console.log(a);
console.log(b);
let [aa, [[bb], cc]] = [2, [[23], 12]];
console.log(bb);
//如果解构不成功，变量的值就等于undefined。
let [foo] = [];
console.log(foo);
//不完全解构
let [x, y] = [1, 2, 3];
console.log(x + y);
let [xx, [[yy], zz]] = [2, [[12, 13], 10]];
console.log(yy);  //12