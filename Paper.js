class Paper{

    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
       this.body = Bodies.circle(x,y,radius/2,options)
       this.x =x
       this.y = y
       this.radius = radius
       this.color = color
       this.image = loadImage("paper.png");
       World.add(world, this.body)

    }

    display(){
     var pos =this.body.position;
      push();
      //ellipseMode(CENTER);
      //fill(this.color);
      //ellipse(pos.x, pos.y, this.radius, this.radius);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
}
