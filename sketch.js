
var tom,tom_img,tom_img2,tom_img3
var jerry, jerry_img ,jerry_img2,jerry_img3
var cheese
function preload() {
    //load the images here
tom_img2 = loadAnimation("images/cat1.png")
tom_img = loadAnimation("images/cat2.png","images/cat3.png")
tom_img3 = loadAnimation("images/cat4.png")
bg_img = loadImage ("images/garden.png")
jerry_img2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
jerry_img = loadAnimation ("images/mouse1.png")
jerry_img3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
// tom and jerry sprites 
tom = createSprite(950,690)
tom.addAnimation ("cat",tom_img2)
tom.scale = 0.1

jerry = createSprite(90,700)
jerry.addAnimation("mouse",jerry_img)
jerry.scale = 0.1

// a sprite is created as cheese 
cheese = createSprite(500,700,30,30)
cheese.shapeColor = "yellow"

}

function draw() {

    background(bg_img);
 //A condition to evalute  tom and jerry collide
   if (tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX =0 
       tom.addAnimation("cat3",tom_img3)
       tom.changeAnimation("cat3")
       tom.x = 180
       jerry.addAnimation("mouse3",jerry_img3)
       jerry.changeAnimation ("mouse3")
   }

   // if the mouse touches yellow box then it changes animation
   if (cheese.x - jerry.x < (cheese.width - jerry.width)/2){
    
    jerry.addAnimation("mouse",jerry_img)
    jerry.changeAnimation ("mouse")
    jerry.velocityX = 0
  
}
    drawSprites();
}


function keyPressed(){

  //if left arrow is pressed then the cat and mouse starts moving
if  (keyCode  === LEFT_ARROW){
   
    tom.velocityX = tom.velocityX-5

    tom.addAnimation("cat2",tom_img)
    tom.changeAnimation("cat2")
    jerry.addAnimation("mouse2",jerry_img2)
    jerry.frameDelay = 30
    jerry.changeAnimation("mouse2")
}
//if right arrow is pressed then  mouse starts moving
if  (keyCode  === RIGHT_ARROW){
   
  jerry.velocityX = jerry.velocityX+5
  jerry.addAnimation("mouse2",jerry_img2)
    jerry.frameDelay = 30
    jerry.changeAnimation("mouse2")
}

}
