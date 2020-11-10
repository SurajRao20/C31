class Plinko {
    constructor(x, y,radius) {
      var options = {
          friction:0,
          isStatic:true,
          density:0

      }
      this.body = Bodies.circle(x,y,8.5,options);
      this.r = this.body.circleRadius*2
      World.add(world, this.body);

    }
    display(){
      var point =this.body.position;
      push();
      ellipseMode(CENTER);
      fill(127,255,0);
      ellipse(point.x,point.y, this.r,this.r);
      pop();
    }
  };