const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
   var ball_option = {
       restitution:1.0
   }
   ball=Bodies.rectangle(200,100,50,50,ball_option);
   World.add(world,ball);
   ball2=Bodies.circle(100,100,20,ball_option);
   World.add(world,ball2)


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball.position.x,ball.position.y,50,50);
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,20,20);
}
