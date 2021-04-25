
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, ground;

var paperObject, dustbinIMG, dustbin;
var launcher_;

function preload()
{
	dustbinIMG =  loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	box1 =  new Box(1200,560,160,20, "white");
	box2 = new Box(1130,500,20,180,"white");
	box3 = new Box(1270,500,20,180,"white");

  ground = new Box(700,580,1400,20, "yellow");

	paperObject = new Paper(70,150,30);

  launcher_ = new Launcher(paperObject.body,{x:120,y:90});
}


function draw() {
  rectMode(CENTER);
  background(255);
  
   box1.display();
   box2.display();
   box3.display();
   
   ground.display();

   paperObject.display();

  
  dustbin = image(dustbinIMG,1100,390,190,180);
  launcher_.display();

}


//function keyPressed(){
  //if(keyCode === UP_ARROW){

    //Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:60,y:-45});

 // }
//}

function mouseDragged(){
  Matter.Body.setPosition(paperObject.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  launcher_.fly();
}