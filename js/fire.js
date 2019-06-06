function Fire(x1,x2,y1,y2, color){
    if(x1==undefined){x1=-50;}else if(x2==undefined){x2=-50;}else if(y1==undefined){y1=100;}else if(y2==undefined){y2=100;}
    if(color==undefined){color="#ff0000";}
    this.x=0;
    this.y=0;
    this.vx=0;
    this.vy=0;
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
    this.lineWidth=1;
    this.rotation=0;
    this.scaleX=1;
    this.scaleY=1;
    this.color=color;
    this.image = new Image();
    this.image.src = "ice-stage-2.png" //ganti pake sprite api
    }
    Fire.prototype.draw=function(context){
    context.save();
    context.translate(this.x,this.y);
    //context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    /*context.lineWidth=this.lineWidth;
    context.fillStyle=this.color;
    context.beginPath();
    context.fillRect(this.x1,this.x2,this.y1,this.y2);*/
    context.drawImage(this.image, -100, -25, 200,50);
    //context.closePath();
    //context.fill();
    /*if(this.lineWidth>0){
    context.stroke();
    }*/
    context.restore();
    };
    
    Fire.prototype.randomColor=function(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }