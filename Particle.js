class Particle {
    constructor(x,y) {
        var options = {
            restitution:0.8,
            friction:0,
            density:1
        }
        this.body = Bodies.circle(x,y,8.5,options);
        this.r = this.body.circleRadius*2;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body)
    }

    display(){
        
        var point = this.body.position;
        push();
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(point.x, point.y,this.r ,this.r) 
        pop();

    }
}