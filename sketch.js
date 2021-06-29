const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var polygonImg,platform;
var polygon, slingShot;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 250, 10);

    block = new Block(280,260);
    block2 =new Block(310,260);
    block3 = new Block(340,260);
    block4 =new Block(370,260);
    block5 = new Block(400,260);
    block6 =new Block(430,260);
    block7 = new Block(460,260);
    block8 =new Block(490,260);

    block9 = new Block(310,220);
    block10 =new Block(340,220);
    block11 = new Block(370,220);
    block12 =new Block(400,220);
    block13 = new Block(430,220);
    block14 =new Block(460,220);

    block15 = new Block(340,180);
    block16 =new Block(370,180);
    block17 = new Block(400,180);
    block18 =new Block(430,180);

    block19 = new Block(370,140);
    block20 =new Block(400,140);

    block21 = new Block(600,160);
    block22 =new Block(630,160);
    block23 = new Block(660,160);
    block24 =new Block(690,160);
    block25 = new Block(720,160);
    block26 =new Block(750,160);
    block27 = new Block(780,160);
    block28 =new Block(810,160);

    block29 = new Block(630,120);
    block30 =new Block(660,120);
    block31 = new Block(690,120);
    block32 =new Block(720,120);
    block33 = new Block(750,120);
    block34 =new Block(780,120);

    block35 = new Block(660,80);
    block36 =new Block(690,80);
    block37 = new Block(720,80);
    block38 =new Block(750,80);

    block39 = new Block(690,40);
    block40 =new Block(720,40);
    


    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();    

    fill("magenta");
    block.display();
    block4.display();
    block7.display();
    block10.display();
    block13.display();
    block16.display();
    block20.display();
    block23.display();
    block26.display();
    block29.display();
    block32.display();
    block35.display();
    block38.display();



    fill("green");
    block2.display();
    block5.display();
    block8.display();
    block11.display();
    block14.display();
    block17.display();
    block19.display();
    block21.display();
    block24.display();
    block27.display();
    block30.display();
    block33.display();
    block36.display();
    block40.display();



    fill("orange");
    block3.display();
    block6.display();
    block9.display();
    block12.display();
    block15.display();
    block18.display();
    block22.display();
    block25.display();
    block28.display();
    block31.display();
    block34.display();
    block37.display();
    block39.display();





}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
    slingshot.attach(polygon);
}