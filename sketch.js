var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50);
  box.shapeColor = "red"
}

function draw() 
{
  background(30);

  if(keyDown("w")|| keyDown("up")){
    box.y -= 8
    box.shapeColor = rgb(random(0, 255), random(1, 255), random(1, 255));
  }
  if(keyDown("s")|| keyDown("down")){
    box.y +=8
    box.shapeColor = rgb(random(0, 255), random(1, 255), random(1, 255));
  }
  if(keyDown("a")|| keyDown("left")){
    box.x -= 8
    box.shapeColor = rgb(random(0, 255), random(1, 255), random(1, 255));
  }
  if(keyDown("d")||keyDown("right")){
    box.x +=8
    box.shapeColor = rgb(random(0, 255), random(1, 255), random(1, 255));
  }

  drawSprites();

}




