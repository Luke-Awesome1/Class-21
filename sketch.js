var fixedRect,movingRect;
//They should be in a row
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,800);
  fixedRect =  createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(200, 200, 80, 50);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(100,500,50,50);
  rect1.shapeColor = "white";
  rect2 = createSprite(200,500,50,50);
  rect2.shapeColor = "black";
  rect3 = createSprite(300,500,50,50);
  rect3.shapeColor = "orange";
  rect4 = createSprite(400,500,50,50);
  rect4.shapeColor = "purple";

  fixedRect.velocityY = 3;
  rect4.velocityY = -4;
}

function draw() {
  background("lightblue");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  bounceOff(fixedRect,rect4);
  
  if(isTouching(movingRect,rect1)) {
    rect1.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }
  else{
    rect1.shapeColor = "white";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}