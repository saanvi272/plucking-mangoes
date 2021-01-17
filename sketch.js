
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,treeImg;
var ground;
var sling,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){

		boyImg=loadImage("images/boy.png");
		treeImg=loadImage("images/tree.png");

}

function setup() {
	createCanvas(850, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(425,550,850,20);
	stone= new Stone(110,300,40);
	sling= new Sling(stone.body,{x:152,y:432});

	mango1=new Mango(650,300,40);
	mango2=new Mango(630,250,50);
	mango3=new Mango(700,240,40);
	mango4=new Mango(800,300,60);
	mango5=new Mango(750,250,40);
	mango6=new Mango(550,290,40);
	mango7=new Mango(680,250,50);
	mango8=new Mango(600,250,50);
	mango9=new Mango(730,300,50);
	mango10=new Mango(600,300,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImg,130,390,130,180);
  image(treeImg,500,150,350,400);
  ground.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(stone,mango){
	var mangoPos = mango.body.position;
	var stonePos = stone.body.position;
	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance<=mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body,false);
	}

}

