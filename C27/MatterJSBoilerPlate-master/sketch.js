
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,ground,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
     var start=400
	//Create the Bodies Here.
	bob1=new Bob(start,500);
	bob2=new Bob(start+80,500);
	bob3=new Bob(start+80+80,500);
	bob4=new Bob(start-80,500);
	bob5=new Bob(start-80-80,500);

	
	ground=new Ground(400,200,600,20);

	rope1=new Rope(bob1,ground,0,0);
	rope2=new Rope(bob2,ground,80,0);
	rope3=new Rope(bob3,ground,160,0);
	rope4=new Rope(bob4,ground,-80,0);
	rope5=new Rope(bob5,ground,-160,0);


	
}


function draw() {
 
  background(0);

  Engine.update(engine)

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 

  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



