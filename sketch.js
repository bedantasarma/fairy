var fairy,fairyImg;
var starImg,star;
var bgImage,starBody,fairyVoice;

const World=Matter.World;
const Engine=Matter.engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
   //preload the images here
  fairyImage=loadImage("fairy1.png");
  fairyVoice=loadSound("JoyMusic.mp3");
  bgImage=loadImage("starnight.png");
  starImage=loadImage("star.png");

}

function setup() {
  createCanvas(800, 750);

  fairy=createSprite(200,600);
  fairy.addImage(fairyImage);
  fairy.scale=0.25;
  fairyVoice.play();

  star=createSprite(740,37);
  star.addImage(starImage);
  star.scale=0.3;
  
  engine=Engine.create();
  world=engine.world;

  starBody=Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});

  World.add(world,starBody);

  Engine.run(engine);

}



function draw() {
  background(bgImage);

  star.x=StarBody.position.x
  star.y=StarBody.position.y

  if(star.y>500 && starBody.position.y>500){
    Matter.Body.setStatic(starbody,true);
  }

  drawSprites();
}
function keyPressed() {
  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-25;
  }
  if(keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+25;
  }

 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}