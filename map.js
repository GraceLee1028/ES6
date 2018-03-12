/**
 * Created by SZ on 2018/3/12.
 */
//map:
//object对象的键只能是字符串，
let obj0={a:1},obj1={b:1};
obj0.name = "lea";
obj0[obj1] = "test";
obj0[obj0] = "test2";//替代上一项【证明object的键只会是字符串】
console.log(obj0);
//map:键值对
let map0 = new Map([
    ["name","lea"],
    ["tel","13452312321"],
    ["age","23"]
]);
console.log(map0);