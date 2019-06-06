function KeyBall(radius, color){
if(radius==undefined){radius=40;}
if(color==undefined){color="#ff0000";}
this.x=0;
this.y=0;
this.x1=0;
this.y1=0;
this.radius=radius;
this.lineWidth=1;
this.rotation=0;
this.scaleX=1;
this.scaleY=1;
this.color=color;
this.v0=0;
this.v0x=0;
this.v0y=0;
this.v1y=0;
this.vx=0;
this.vy=0;
this.image = new Image();
this.image.src = "slingshot-frame-hi.png"
}

KeyBall.prototype.draw=function(context){
context.save();
context.translate(this.x,this.y);
context.rotate(this.rotation);
context.scale(this.scaleX,this.scaleY);
/*context.lineWidth=this.lineWidth;
context.fillStyle=this.color;
context.beginPath();
context.arc(0,0,this.radius,0,(Math.PI*2),true);*/
context.drawImage(this.image, -37, -25, 75,225);

context.closePath();
context.fill();
if(this.lineWidth>0){
context.stroke();
}
context.restore();
};

KeyBall.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};