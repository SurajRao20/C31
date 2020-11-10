const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles =[];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function preload() {
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,790,480,20);
    wall1 = new Ground(0,200,10,600);
    wall2 = new Ground(480,200,10,600);

    for(var k = 0; k <= width; k = k + 80) {
        divisions.push(new Division(k ,height-divisionHeight/2 ,10, divisionHeight));
    }

    for (var j = 40; j <= width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }

    for (var l = 15; l <= width-10; l=l+50){
        plinkos.push(new Plinko(l,175));
    }

    for (var m = 40; m <= width; m=m+50){
        plinkos.push(new Plinko(m,275));
    }

    for (var n = 15; n <= width-10; n=n+50){
        plinkos.push(new Plinko(n,375));
    }


}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    

    //divisions
    for(var k = 0; k <  divisions.length; k++){
        divisions[k].display();
    }


    // plinkos
    for(j = 0; j < plinkos.length; j++){
        plinkos[j].display();
    }

    for(l = 0; l < plinkos.length; l++){
        plinkos[l].display();
    }

    for(m = 0; m < plinkos.length; m++){
        plinkos[m].display();
    }

    for(n = 0; n < plinkos.length; n++){
        plinkos[n].display();
    }

    ground.display(); 
    wall1.display();
    wall2.display();


    // particles

    if(frameCount % 60 == 0){
        particles.push(new Particle( random(10, 470), 0));
    }

    for(i = 0; i < particles.length; i++){
        particles[i].display();
    }
}
