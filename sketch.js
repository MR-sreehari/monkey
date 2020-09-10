var monkey,bg,anaImg,obsImg,obstacleGroup,backImg,score;

function preload(){
  backImage=loadImage("jungle.jpg");
 
  bananaImage=loadImage("banana.png");
  obsImage=loadImage("stone.png");
  
  monkeyRun=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
}

function setup() {
  createCanvas(600, 400);
  
  monkey=createSprite(60,370,10,10);
  monkey.addAnimation("monkeyRunning",monkeyRun);
   monkey.scale=0.1;
  
  bg=createSprite(0,0,800,400);
  bg.addAnimation("background",backImage);
}

function draw() {
  background("white");

  score=0;
  background.velocityX=-3;
   if(background.x<0){
   background.x=background.width/2;
  }
  
  
  
  drawSprites();
  stroke("white");
  textSize(10);
  fill("white");
  text("Score : "+score,500,50);
}