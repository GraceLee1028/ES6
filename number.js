/**
 * Created by SZ on 2018/5/11.
 */
//①、Number.isInteger(数值):数值是否为整数
let money = 30;
console.log(Number.isInteger(money));//true

//②、Number.parseInt();
console.log(Number.parseInt(12.98));
//③、Number.parseFloat();
console.log(Number.parseFloat('12.4a'));//输出：12.4

//④、Math.sign():判断一个数到底是正数、负数、还是零。
console.log(Math.sign(-5));//输出-1:为负数
console.log(Math.sign(5));//输出1:为正数
console.log(Math.sign(0));//输出0:为零
