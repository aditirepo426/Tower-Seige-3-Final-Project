class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("ibox.jpg");
        this.image.scale = 0.5;
        this.Visibility = 255;
        World.add(world,this.body);
        
} 
display(){

    if(this.body.speed < 8){
        push();
        rectMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
    } else {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
    }
    
}

score(){
    if (this.Visibility < 0 && this.Visibility > -1005){
        score++;
    }
  }

};