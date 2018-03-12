/**
 * Created by SZ on 2018/3/9.
 */
    //集合特点【键值对，值不重复】
let set1 = new Set();
console.log(set1);
console.log(set1.size);//结果：0
//属性：size[集合的大小]
let set2 = new Set([1,2,"3"]);
console.log(set2);//Set(3) {1, 2, "3"}
//方法
//add():添加[返回集合对象，支持链式操作]
let r1 = set2.add("lea");
console.log(set2);//结果：Set(4) {1, 2, "3", "lea"}
console.log(r1);//结果：Set(4) {1, 2, "3", "lea"}
//delete():删除某项【不能链式操作】
let r2 = set2.delete(1);
console.log(r2);//结果：true【删除成功】
console.log(set2);//结果：Set(3) {2, "3", "lea"}
console.log(set2.delete(1));//结果：false【删除失败】
//clear()：清除集合数据
let r3 = set2.clear();
console.log(set2);//结果：Set(0) {}
console.log(r3);//结果：undefined
//has():是否存在某个值
let r4 = set2.has(1);
console.log(r4);//结果：false

//keys():
let set3 = new Set([33,22,11]);
console.log(set3.keys());
console.log(set3.values());
