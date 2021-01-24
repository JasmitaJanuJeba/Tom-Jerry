
var gardenImg, jerry4, jerry, jerry3, jerry2, tom, tom2, tom4, Tom, Jerry, jerryImg, canvas;

function preload() {
    //garden
    gardenImg = loadImage("images/garden.png");
    //Jerry Images
    jerry4 =loadAnimation("images/jerryFour.png");
    jerry =loadAnimation("images/jerryOne.png");
    jerry3 = loadAnimation("images/jerryThree.png");
    jerry2 = loadAnimation("images/jerryTwo.png");
    //Tom Images
    tom = loadAnimation("images/tomOne.png");
    tom2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tom4 = loadAnimation("images/tomFour.png");
}

function setup(){
   canvas = createCanvas(1000,800);
    //creating Jerry
    Jerry = createSprite(200,600);
    Jerry.addAnimation("jerry",jerry2);
    Jerry.debug = true;
    Jerry.scale = 0.15;
    //creating Tom
    Tom = createSprite(870,600);
    Tom.addAnimation("tom",tom);
    Tom.debug=true;
    Tom.scale = 0.2;

}

function draw() {
  
    background(gardenImg);
    //Collided
    if(Tom.x - Jerry.x < (Tom.width - Jerry.width)/2){
       Tom.velocityX = 0;
       Tom.addAnimation("Collided", tom4);
       Tom.x = 300;
       Tom.scale = 0.2;
       Tom.changeAnimation("Collided");
       Jerry.addAnimation("Inspecting",jerry4);
       Jerry.scale = 0.15;
       Jerry.changeAnimation("Inspecting");
    }

    drawSprites();
}


function keyPressed(){
   //Press Left Arrow
  if(keyCode === LEFT_ARROW){
     Tom.velocityX = -5;
     Tom.addAnimation("Moving", tom2 );
     Tom.changeAnimation("Moving");
     Jerry.addAnimation("Jerryt", jerry2)
     Jerry.frameDelay = 25;
     Jerry.changeAnimation("Jerryt");
  }

}