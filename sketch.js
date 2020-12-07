var Mrect,Frect;
var A,B;

function setup() {
  createCanvas(800,400);
  Mrect=createSprite(400, 200, 50, 50);
  Mrect.shapeColor="green"

  Frect=createSprite(400, 200, 50, 50);
  Frect.shapeColor="green";

  A=createSprite(200, 100, 50, 50);
  A.shapeColor="blue"
  A.velocityX=3;

  B=createSprite(600, 100, 50, 50);
  B.shapeColor="blue";
  B.velocityX=-3;
}

function draw() {
  background(255,255,255); 
  if(Mrect.x-Frect.x < Mrect.width/2+Frect.width/2 &&
  Frect.x-Mrect.x < Mrect.width/2+Frect.width/2 &&
  Mrect.y-Frect.y < Mrect.width/2+Frect.width/2 &&
  Frect.y-Mrect.y < Mrect.width/2+Frect.width/2){
   
    Mrect.shapeColor="red"
    Frect.shapeColor="red"
  }
  else{
    Mrect.shapeColor="green"
    Frect.shapeColor="green"
  }
   
  Mrect.y=mouseY;
  Mrect.x=mouseX;

 if(A.x-B.x < A.width/2+B.width/2 &&
  B.x-A.x < A.width/2+B.width/2 )
   {
      
     A.velocityX=A.velocityX*(-1);
     B.velocityX=B.velocityX*(-1);

  }

  drawSprites();
}