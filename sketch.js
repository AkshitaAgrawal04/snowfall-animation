var bg, snow_mvment, snow1, snow2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  bg= loadImage("snow1.jpg");
  snow_mvment= loadImage("snow5.webp")
}


function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  snow2= new snow(150,150,50,50,10);
}

function draw() {

  Engine.update(engine);

  background(bg);
  //snow1= createSprite(400, 200, 50, 50);
  //snow1.addImage(snow_mvment);
  drawSprites();



  if( keyDown=== DOWN_ARROW) {
    snow1.y= snow1.y+ 10;
  } 
  if( keyDown=== UP_ARROW) {
    snow1.y= snow1.y- 10;
  } 
  if( keyDown=== RIGHT_ARROW) {
    snow1.x= snow1.x+ 10;
  } 
  if( keyDown=== LEFT_ARROW) {
    snow1.x= snow1.x- 10;
  } 

  snow2.display();
}

