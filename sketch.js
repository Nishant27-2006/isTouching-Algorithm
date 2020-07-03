var FixedRect,MovingRect;

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(400,200,40,80);
  FixedRect.shapeColor="red";
  MovingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);
  MovingRect.x=mouseX;
  MovingRect.y=mouseY;
  if(MovingRect.width/2+FixedRect.width/2>MovingRect.x-FixedRect.x && 
    MovingRect.width/2+FixedRect.width/2>FixedRect.x-MovingRect.x &&
    MovingRect.height/2+FixedRect.height/2>MovingRect.y-FixedRect.y &&
    MovingRect.height/2+FixedRect.height/2>FixedRect.y-MovingRect.y){
     MovingRect.shapeColor="green";
     FixedRect.shapeColor="green";
  }
  else{
    MovingRect.shapeColor="red";
    FixedRect.shapeColor="red"
  }  
  
  drawSprites();
}