var starImg,bgImg;
var star, starBody;
var fairyImg,fairy,fairyVoice

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starryNight.jpg");
	fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice=loadSound("JoyMusic.mp3");
}

function setup() {
	var canvas=createCanvas(800, 750);

fairyVoice.play();

fairy=createSprite(130,520);
fairy.scale=0.3;
fairy.addAnimation("fairy_fairy",fairyImg);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	star.visible=true;
	fairy.visible=true;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody.true);
  }

  drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		starBody.visible=true;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+20;
	}
	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-20;
	}
	
}
