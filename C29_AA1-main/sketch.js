const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

var fruit;
var fruitR
var rope;
var fOptions

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(9,{x:245, y:30});
  fruitR= new Link(rope,fruit);

  fOptions={
    density: 0.01
  };
  fruit = Bodies.circle(250,250,20,fOptions); //.circle(x,y,Radio);
  Matter.Composite(rope.body,fruit);
  



  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  
  ellipse(fruit.position.x,fruit.position.y,15,13);
  
  
  Engine.update(engine);
  

 
   
}
