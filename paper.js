class paper {
    constructor(x, y, diameter) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2,
          friction:0.5

      }
      this.body = Bodies.circle(x, y, diameter, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    fill("red");
    ellipse(0,0,this.diameter);
    pop();
      
    }
  };