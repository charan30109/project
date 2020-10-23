var car;
var car1,car2;
var wall;
var wall1,wall2;
var speed=Math.random(55,90);
var speed1=Math.random(65,90);
var speed2=Math.random(59,90);
var weight=Math.random(400,1500);
var wall10;
var wall20;
var wall30;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 350, 30, 30);
  car.shapeColor="purple"
  car1=createSprite(50, 200, 30, 30);
  car1.shapeColor="cyan"
  car2=createSprite(50, 50, 30, 30);
  car2.shapeColor="blue";

  car.velocityX = speed;
  car1.velocityX = speed1;
  car2.velocityX = speed2;

  wall=createSprite(1300,350,30,50);
  wall1=createSprite(1300,200,30,50);
  wall2=createSprite(1300,50,30,50);
  
  wall10=createSprite(800,20,1600,10);
  wall20=createSprite(800,150,1600,10);
  wall30=createSprite(800,250,1600,10);
}

function draw() {
  background("black");  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5 * weight*speed * speed/22509;
if(deformation>180) {
  car.shapeColor=color(255,0,0);

}
if(deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0);
  
}
if(deformation<100) {
  car.shapeColor=color(0,255,0);
  
}
  }





if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
car2.velocityX=0;
var deformation=0.5 * weight*speed * speed/22509;
if(deformation>180) {
  car2.shapeColor=color(255,0,0);

}
if(deformation<180 && deformation>100) {
  car2.shapeColor=color(230,230,0);
  
}
if(deformation<100) {
  car2.shapeColor=color(0,255,0);
  
}

  }


if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
car1.velocityX=0;
var deformation=0.5 * weight*speed * speed/22509;
if(deformation>180) {
  car1.shapeColor=color(255,0,0);

}
if(deformation<180 && deformation>100) {
  car1.shapeColor=color(230,230,0);
  
}
if(deformation<100) {
  car1.shapeColor=color(0,255,0);
  
}



  }








  
  }