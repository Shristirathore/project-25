class Dustbin{
  constructor(x,y,width,height){
      var box_options={
          isStatic:true
      }
      this.bodies = Bodies.rectangle(x,y,width,height,box_options);
     
     this.width = width;
     this.height = height;
      this.image=loadImage("sprites/dustbin.png")
      World.add(world,this.bodies);
  }
  display(){
      var pos = this.bodies.position;
      //var angle = this.bodies.angle;
   
      translate(pos.x,pos.y,);
      imageMode(CENTER);
     image(this.image,0, 0, this.width, this.height);
  
  }
} 
