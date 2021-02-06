class Bob {
    constructor(x, y,r ) {
      var options = {
    isStatic:false,
    restitution:1.4,
    friction:0.5,
    density:1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r=r
      
      
      World.add(world, this.body);
    }




    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image,0, 0, this.r,this.r);
      pop();
    }
  };


  
    
    
    
  