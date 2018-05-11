/**
 * Created by SZ on 2018/5/11.
 */
//字符串的扩展

//①、字符的 Unicode 表示法【\u0000~\uFFFF】
let s1 = '\uD842';

//②、codePointAt():codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。【码点的十进制值】
let s01 = '安';
let s2 = '𠮷';//这个汉字不是吉祥的吉
let s3 = 'lea';
console.log(s01);//输出1
console.log(s2.length);//输出2；
console.log(s3.length);//输出3
console.log(s3.charAt(0));//l


console.log("+++++++++++++++++++++++++++++++++++++++++++++");
//是否找到了参数字符串。
let s4 = "hi lea!";
//③、includes()：包含true,不包含：false
console.log(s4.includes("i"));//true;
console.log(s4.includes("i",2));//false
//④、startsWidth():在字符串头部找到参数字符串
console.log(s4.startsWith('m'));//false
//⑤、endsWith():在字符串尾部找到参数字符串
console.log(s4.endsWith('!'));//true


console.log("+++++++++++++++++++++++++++++++++++++++++++++");
//⑥、repeat(参数):返回一个新字符串【复制】0：不负责，为空字符串；
// 参数必须是正数，且会自动转换为整数
let s5 = "ok!";
let s50 = s5.repeat(0);//返回空
console.log(s50);
s50 = s5.repeat(NaN);////返回空
console.log(s50);

s50 = s5.repeat(1);//返回"ok!"【源字符串】
console.log(s50);

s50 = s5.repeat(.2);//取0，返回空
console.log(s50);
s50 = s5.repeat(.9);//取0，返回空
console.log(s50);

console.log("+++++++++++++++++++++++++++++++++++++++++++++");
let s6 = ['hell','he'];
function set(...params){
    console.log(params);//输出：[ 1, 3, 5 ]
}
console.log(...s6);//输出：hell he
console.log(s6);//输出：[ 'hell', 'he' ]
set(1,3,5);