class Drop{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circleMode(CENTER);
        circle(this.body, 0, 0, this.width, this.height);
        pop();
      }
}