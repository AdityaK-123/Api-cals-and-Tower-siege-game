class Block{
    constructor(x, y, width, height, ) {
        var options = {
          restitution : 0.8,
          friction : 0.6,
          isStatic : false,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.brightness=255;
      }
      display(){
       
        if(this.body.position.y < 600 ){
          push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
         push();
          World.remove(world,this.body);
          rect(999,999,this.width,this.height);
          this.brightness=this.brightness-5;
          tint(255,this.brightness);
          
         pop();
        }
         
      }
      Score(){
        if(this.brightness<0 && this.brightness>-105){
          
          score++;
        } 
      }
      }

 
