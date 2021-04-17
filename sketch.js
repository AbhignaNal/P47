const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var dog1, dog2;
var ball2;
var dog1Img, dog2Img;
function preload() {
  dog1Img = loadImage("image-removebg-preview.png");
  dog2Img = loadImage("dog2.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  dog = Bodies.rectangle(600, 200, 20, 20);
  World.add(world, dog);
  Matter.Body.setStatic(dog, true);

  dog2 = Bodies.rectangle(200, 200, 20, 20);
  World.add(world, dog2);
  Matter.Body.setStatic(dog2, true);

  ball2 =  new Ball(400, 200, 20);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  imageMode(CENTER);
  image(dog1Img, dog.position.x, dog.position.y, 100, 100);
  image(dog2Img, dog2.position.x, dog2.position.y, 100, 100);
  ball2.display();
  drawSprites();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    Matter.Body.setPosition(dog, dog.position.x = dog.position.x + 5);
  }
  
  if(keyCode === RIGHT_ARROW){
    Matter.Body.setPosition(dog, dog.position.x = dog.position.x - 5);
  }
}