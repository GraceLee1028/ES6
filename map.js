/**
 * Created by SZ on 2018/3/12.
 */
//map:
//object对象的键只能是字符串，
let obj0={a:1},obj1={b:1};
obj0.name = "lea";
obj0[obj1] = "test";
obj0[obj0] = "test2";//替代上一项【证明object的键只会是字符串，对象会把键直接转为字符串】
console.log(obj0);
//map:键值对，键不只可以是字符串,也可以是其他类型的键
let map0 = new Map([
    ["name","lea"],
    ["tel","13452312321"],
    ["age","23"],
    ["name","anna"],
    [obj0,"lea"],
    [obj1,"lea"]
]);

//keys(),values(),entries()
console.log(map0.keys());
console.log(map0.values());
console.log(map0.entries());

////has(key):是否存在该键值对
//console.log(map0.has("name"));//true
//console.log(map0.has(obj0));//true
//console.log(map0.has("add"));//false
////clear():清空
//map0.clear();
//console.log(map0.size);//0

//key可以是对象；
//console.log(map0);
////属性：size：获取数据的长度
//console.log(map0.size);//size为5，
////方法
////set():增加或修改数据【语法：set(key,value);】
////增加:
//map0.set("add",["湖北省","荆州市"]);
//map0.set(["province","city"],"湖北省荆州市");
////修改
//map0.set("name","joanna");
//console.log(map0);
////get(key):查看某项数据。
//console.log(map0.get("name"));
////delete():删除数据
//console.log(map0.delete("name"));
//console.log(map0);
