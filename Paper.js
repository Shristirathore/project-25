class Paper {
    constructor(x,y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 17, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      // pos.x = mouseX;
      // pos.y = mouseY;
      push();
      translate(pos.x,pos.y);
     
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
   
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  } 