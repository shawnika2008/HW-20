var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,800);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50, 50, 20, 20);
wall = createSprite(1500,100,40,height/2);
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0); 
  
car.velocityX = speed;

if(wall.x - car.x < (car.width + wall.width)/10)
{
car.velocityX = 0;

var deformation = 0.5 * weight * speed * speed/22500;
if (deformation >= 180)
{
  car.shapeColor = color(255,0,0);
}
if (deformation < 180 && deformation > 100)
{
  car.shapeColor = color(230,230,0);
  }

if (deformation < 100)
{
  car.shapeColor = color(0,255,0);
  }
}


  
  drawSprites();
}