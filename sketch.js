const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;

var stone,boy;

var boyI,bgI;

var sling;

function preload(){
  bgI = loadImage("pics/backg.png")
  boyI = loadImage("pics/boy.png")
  treeI = loadImage("pics/tree.png")

}

function setup() {
  createCanvas(700,600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(580,500)
  boy.addImage(boyI)
  boy.scale = 0.07;

  tree = createSprite(180,390)
  tree.addImage(treeI)
  tree.scale = 0.3;

  ground = new Ground(400,580,900,1)

  stone = new Stone(540,460,20)

  mango1 = new Mango(180,300,20)
	mango2 = new Mango(260,340,20)
	mango3 = new Mango(150,290,20)
	mango4 = new Mango(220,330,20)
	mango5 = new Mango(140,360,20)
	mango6 = new Mango(200,350,20)
	mango7 = new Mango(250,270,20)
	mango8 = new Mango(60,330,20)
	mango9 = new Mango(100,360,20)

  sling = new SlingShot(stone.body,{x:540, y:460})

 
}

function draw() {
  background(bgI);
  
  Engine.update(engine);
  drawSprites();

  fill("cyan")
  stroke("red")
  strokeWeight(5)
  textSize(30)
  text("Drag the stone and release it towards the mangos",20,50)

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)

  sling.display();

}
function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY} )
  
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(body1,body2){
	var distance = dist(body1.body.position.x,body1.body.position.y,body2.body.position.x,body2.body.position.y)
	if(distance <= body1.r+body2.r){
		Matter.Body.setStatic(body2.body,false);
	}

}