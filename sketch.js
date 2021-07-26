//Create variables here
var dog, happyDog, dogImg, happyDogImg, database, foodS, foodStock;
function preload() {
  //load images here
  dogImg = loadImage("images/dogimg.png");
  happyDogImg = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 350, 30, 30);
  dog.addImage("dog", dogImg);
  dog.scale=0.3

}

function draw() {
  background(46, 139, 87);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS-1);
    dog.addImage(happyDogImg);
    
  }
  stroke("black");
  textSize(50);
  fill("black");
  text("food: "+foodS,200,250);
  textSize(20)
  text("press up arrow key feed the dog",175,20);
  drawSprites();
  //add styles here

}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  database.ref('/').update({
    food: x
  })
}



