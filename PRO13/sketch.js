var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
 
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));
var rand = Math.round(random(1,3));
console.log(rand);

// var select_sprites = Math.random(random(1,3));
var rand = Math.round(random(4,6));
console.log(rand);

// var select_sprites = Math.round(1,3);
var rand = Math.round(random(6,9));
console.log(rand);

// var select_sprites = Math.round(random(1,3));
var rand = Math.round(random(10,12));
console.log(rand);

  
 if (frameCount % 50 == 0) {
    if (rand == 1) {
      createApples();
    } else if (rand == 2) {
       createOrange();
     }else if (rand == 3) {
       createRed();
    }
  }

  if (frameCount % 50 == 0) {
    if (rand == 4) {
      createApples();
    } else if (rand == 5) {
       createOrange();
     }else if (rand == 6) {
       createRed();
    }
  }

  if (frameCount % 50 == 0) {
    if (rand == 7) {
      createApples();
    } else if (rand == 8) {
       createOrange();
     }else if (rand == 9) {
       createRed();
    }
  }

  if (frameCount % 50 == 0) {
    if (rand == 10) {
      createApples();
    } else if (rand == 11) {
       createOrange();
     }else if (rand == 12) {
       createRed();
    }
  }



}

function createApples() {
apple = createSprite(random(50, 350),10, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),10, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),10, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
