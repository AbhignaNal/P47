class Ball{
    constructor(x, y, radius, angle){
        var options = {
            isStatic: true,
            restitution: 0.8
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("ball.png.png");

        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}