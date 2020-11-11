class Mango{
    constructor(x,y,r){
        var M_options = {
            isStatic : true,
            restitution : 0.5,
            friction : 1.5,
            density : 1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("pics/mango.png");

        this.body = Bodies.circle(this.x,this.y,this.r,M_options)

        World.add(world, this.body)

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2)
        pop();

    }
}