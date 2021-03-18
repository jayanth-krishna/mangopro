
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,stone,slingShot;
var world,boy;
var gameState="onSling"

function preload(){
	boy=loadImage("boy.png");
  }

function setup(){
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(900,200,30);
     mango2=new mango(975,90,28);
	 mango3=new mango(1005,170,28);
	 mango4=new mango(1200,140,32);
	 mango5=new mango(1050,120,30);
	 mango6=new mango(1100,180,26);
	treeObj=new tree(1050,580);
  stone=new Stone(230,460,34);
	slingShot=new SlingShot(stone.body,{x:230,y:425})
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  groundObject.display();
  slingShot.display();

 
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
 // }
}


function mouseReleased(){
  slingShot.fly();
 // gameState = "launched";
}
