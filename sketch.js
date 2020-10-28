const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,left1,bottom,bootom1,right,right1,paper1;

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:false,
		restitution:0.3,	
		friction:0.5,
		density:1.2
	}

	//Creating the Bodies Here.

	paper = new Paper(100,200,20);


	ground = new Ground(600,height,1400,40,paper_options);

//creating dustbin
	left = createSprite(900,490,20,200);
	left1 = Bodies.rectangle(900,490,20,200,{isStatic:true});
	World.add(world,left1);

	bottom = createSprite(980,580,150,20);
	bottom1 = Bodies.rectangle(980,580,150,20,{isStatic:true});
	World.add(world,bottom1);

	right = createSprite(1060,490,20,200);
	right1 = Bodies.rectangle(1060,490,20,100,{isStatic:true});
	World.add(world,right1);
	Engine.run(engine);

	dustbin=new Dustbin(980,480,195,220);
}


function draw() {
  rectMode(CENTER);
  background("white");
  keyPressed();

  
  ground.display();

paper.display();
	fill("black");
	textSize(16);
	text("USE UP AND DOWN ARROW KEYS TO MOVE THE PAPER", 200,100);
	text("GOAL: PUT PAPER IN THE DUSTBIN", 200,120);



	left.x = left1.position.x 
	left.y = left1.position.y 
	right.x = right1.position.x 
	right.y = right1.position.y 
	bottom.x = bottom1.position.x 
	bottom.y = bottom1.position.y 
	drawSprites();
	dustbin.display();

 
}



function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-3});
	}
} 
