
var box1,box2,box3,ground1,paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine = Engine.create();
var world = engine.world;



function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	box1=new dustbin(1000, 625,200,20);
	

	box2=new dustbin(900, 620,20,100);
	

	box3=new dustbin(1080, 620,20,100);
	
	ground1 = new ground(width/2, 650, width, 20);

	paper1=new paper(200,619,2);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  paper1.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}