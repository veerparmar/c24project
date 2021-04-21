const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var stone;
var rubber;
var plane;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350,10,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    hammer.display();
    plane.display();

    stone.display();
    rubber.display();
    
 
}