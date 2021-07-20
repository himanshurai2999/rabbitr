var carrot,carrotImg;
var goldenCarrot,goldenCarrotImg;
var rabbit,rabbit_running;
var score = 0;
var ground,groundImg;

function preload(){
  rabbit_running =   loadAnimation("images/rabbit1.png","images/rabbit2.png");
  carrotImg = loadImage('images/carrot.png');
  goldenCarrotImg = loadImage('images/goldencarrot.png');
  groundImg = loadImage("images/ground.png");
  
}

function setup() {
  createCanvas(800, 600);
  
  ground = createSprite(400, 570, 800, 20)
  ground.addImage("ground",groundImg);
  ground.x = ground.width/2;

  rabbit = createSprite(300,600,20,20);
  rabbit.addAnimation("rabbit",rabbit_running);
  rabbit.scale = 0.05;
  
  carrotGroup = new Group();
  goldenCarrotGroup = new Group();


}
function draw() {
    background("#DDF3F5");

    ground.velocityX = -4;

    if(ground.x<0){
      ground.x = ground.width/2;
    }

    if(keyDown("space") && rabbit.y >= 159) {
      rabbit.velocityY = -12;
    }
  
    rabbit.velocityY = rabbit.velocityY + 0.8;

    spawnCarrot();
    spawngoldenCarrot();

    if(carrotGroup.isTouching(rabbit)){
      carrotGroup.destroyEach();
    }
    if(goldenCarrotGroup.isTouching(rabbit)){
      goldenCarrotGroup.destroyEach();
    }

    rabbit.collide(ground);

    drawSprites();
  
}

function spawnCarrot(){
  if( frameCount% 90 === 0){
    carrot = createSprite(800,120,30,10);
    carrot.y = Math.round(random(250,270));
    carrot.addImage(carrotImg);
    carrot.scale = 0.05;
    carrot.velocityX = -3;

    //adjust the depth
    carrot.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    carrotGroup.add(carrot);
    
  }
}

function spawngoldenCarrot(){
  if( frameCount% 200 === 0){
    goldenCarrot = createSprite(800,120,30,10);
    goldenCarrot.y = Math.round(random(250,270));
    goldenCarrot.addImage(goldenCarrotImg);
    goldenCarrot.scale = 0.15;
    goldenCarrot.velocityX = -3;

    goldenCarrotGroup.add(goldenCarrot);
  }
}

