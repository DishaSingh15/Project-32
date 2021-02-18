class Superhero {
    constructor(x,y,width,height) {
        var options = {
            restitution: 0,
            isStatic:false,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
}
display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(this.body.postion.x,this.body.position.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
}