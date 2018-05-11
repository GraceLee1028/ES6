/**
 * Created by SZ on 2018/5/11.
 */
    let success = true;
//Promise对象是一个构造函数，用来生成Promise实例
const promise = new Promise((resolve,reject)=>{
    if(success){
        resolve();//从“未完成”变为“成功”
    }else{
        reject();//从“未完成”变为“失败”
    }
});

promise.then(function(){
    console.log("first success")
},function(){
    console.log("first fail");
});

//
function timeout(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms);
    });
}

timeout(100).then(value=>{
    console.log("timeout over");
    console.log("ok, success");
});

//异步加载图片
function loadImageSync(url){
    return new Promise((resolve,reject)=>{
        let image = new Image();
        image.onload = function(){
            resolve();
        };
        image.onerror = function(){
            reject();
        };
        image.src = url;
    });
}
loadImageSync("http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=40&spn=0&di=116202622910&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=642148368%2C2957784297&os=75795444%2C1792973654&simid=0%2C0&adpicid=0&lpn=0&ln=1987&fr=&fmq=1526023170082_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01635d571ed29832f875a3994c7836.png%40900w_1l_2o_100sh.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bzv55s_z%26e3Bv54_z%26e3BvgAzdH3Fo56hAzdH3FZMTYoODMaN3Q%3D_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=").then(function(){
    console.log("img load success");
},function(){
    console.log(new Error("img load fail,maybe not find img file"));
});

//异步加载json
function getJson(url){
    return new Promise((resolve,reject)=>{
        let handler = function(){
            if(this.readyState != 4){
                return;
            }
            if(this.status == 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader("Accept","application/json");
        client.send();
    });
}
getJson("../package.json").then(function(json){
    console.log("请求数据-----json---数据请求成功");
    console.log(json);
},function(error){
    console.log(error);
}).catch(()=>{//处理 Promise 内部发生的错误
    console.log("catch-------------error")
});