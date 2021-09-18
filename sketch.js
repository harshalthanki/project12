var jake, jakeAn;
var path, pathImg;
var leftwall, rightwall;
var coin, coin2, coin3, coinImg;
var bomb, bomb2, bomb3, bomb4, bombImg;
var gameState = "start";

function preload(){
  //pre-load images
  jakeAn = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG")
  pathImg = loadImage("path.png")
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  if(gameState == "start")
  {
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 28;
  path.scale = 1.2;

  coin = createSprite(250,-200)
  coin.addImage(coinImg)
  coin.velocityY = 12;
  coin.scale = 0.5;

  coin2 = createSprite(130,-800)
  coin2.addImage(coinImg)
  coin2.velocityY = 10;
  coin2.scale = 0.5;

  coin3 = createSprite(200,-1000)
  coin3.addImage(coinImg)
  coin3.velocityY = 10.5;
  coin3.scale = 0.5;

  bomb = createSprite(300,-400)
  bomb.addImage(bombImg)
  bomb.velocityY = 11
  bomb.scale = 0.1

  bomb2 = createSprite(50,-500)
  bomb2.addImage(bombImg)
  bomb2.velocityY = 14
  bomb2.scale = 0.1

  bomb3 = createSprite(200,-600)
  bomb3.addImage(bombImg)
  bomb3.velocityY = 10
  bomb3.scale = 0.1

  bomb4 = createSprite(60,-800)
  bomb4.addImage(bombImg)
  bomb4.velocityY = 13
  bomb4.scale = 0.1

  jake = createSprite(200,350)
  jake.addAnimation("jakerunning",jakeAn)
  jake.scale = 0.5;

  leftwall = createSprite(0,200,20,400)
  leftwall.visible = false;
  rightwall = createSprite(400,200,20,400)
  rightwall.visible = false;

  jake.collide(leftwall)
  jake.collide(rightwall)
  }
  
}

function draw() 
{
  background(0);
  drawSprites();

  
  jake.x = World.mouseX
  
  if(coin.isTouching(jake))
  {
    coin.destroy(); 
  }

  if(coin2.isTouching(jake))
  {
    coin2.destroy(); 
  }

  if(coin3.isTouching(jake))
  {
    coin3.destroy(); 
    path.velocityY = 0;
    jake.destroy();
    gameState = "victory";
  }

  if(gameState == "victory")
    {
      fill("green")
      textSize(35)
      stroke("orange")
      strokeWeight(5)
      text("Yay! You won.....", 100,200)
    }

  if(jake.isTouching(bomb))
  {
    jake.destroy();
    bomb.destroy();
    gameState = "defeat";
  }

  if(jake.isTouching(bomb2))
  {
    jake.destroy();
    bomb2.destroy();
    gameState = "defeat";
  }

  if(jake.isTouching(bomb3))
  {
    jake.destroy();
    bomb3.destroy();
    gameState = "defeat";
  }

  if(jake.isTouching(bomb4))
  {
    jake.destroy();
    bomb4.destroy();
    gameState = "defeat";
  }

  if(coin.y > 400)
  {
    jake.destroy();
    gameState = "defeat";
  }

  if(coin2.y > 400)
  {
    jake.destroy();
    gameState = "defeat";
  }

  if(coin3.y > 400)
  {
    jake.destroy();
    gameState = "defeat";
  }
  
  if(gameState == "defeat")
  {
      path.velocityY = 0;
      fill("red")
      textSize(35)
      stroke("blue")
      strokeWeight(5)
      text("Ohh! You lose.....", 100,200)
  }

  if(path.y > 400)
  {
    path.y = height/2;
  }
}


