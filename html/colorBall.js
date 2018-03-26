/**
 * Created by lea on 2018/3/26.
 */
function randomBetween(min,max){
    let ra = Math.floor(Math.random()*(max-min+1)+min);
    console.log(ra);
    return ra;
}
function colorRandom(){
    let r = randomBetween(0,255);
    let g = randomBetween(0,255);
    let b = randomBetween(0,255);
    return "rgb("+r+","+g+","+b+")";
}
(function(){
    let ball = document.getElementById("myBall");
    let ballCtx = ball.getContext("2d");//2d的画布
    ball.width = 600;
    ball.height = 500;
    ball.style.backgroundColor = "#000";
    class Ball{
        constructor(x,y,color,radius){
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = radius;
        }
        render(){
            ballCtx.fillStyle = this.color;
            ballCtx.fillRect(this.x, this.y, this.radius, this.radius);
        }
    }

    class MoveBall extends Ball{
        constructor(x,y,color,radius){
            super(x,y,color,radius);
            //变量
            this.cx = randomBetween(-5,5);
            this.cy = randomBetween(-5,5);
            this.radiusc = randomBetween(1,5);
        }
        move(){
            //变量增加
            this.x+=this.cx;
            this.y+=this.cy;
            this.radius-=this.radiusc;
            if(this.radius<=0){
                this.radius = 0;
            }
        }

    }
    let ballAll = [];
    ball.addEventListener("mousemove",function(e){
        let ball0 = new MoveBall(e.offsetX,e.offsetY,colorRandom(),randomBetween(30,50));
        ballAll.push(ball0);
    });
    setInterval(function(){
        //清屏
        ballCtx.clearRect(0,0,ball.width,ball.height);
        //绘制
        for(let ball of ballAll){
            ball.render();
            ball.move();
        }
    },50);
})();