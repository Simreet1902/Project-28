class Launcher {
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 20,
            stiffness: 0.004
        }

        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
      if(this.launcher.bodyA != null){
        strokeWeight(4);
        line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, this.launcher.pointB.x, this.launcher.pointB.y);
     }
      }

       

    fly(){
        this.launcher.bodyA = null;
    }
}