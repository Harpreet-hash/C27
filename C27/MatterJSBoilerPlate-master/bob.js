class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            density:0.5,
            friction:1

        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }
    display(){
        push()
        //ellipseMode(CENTER);
        fill("cyan")
       
        
        ellipse(this.body.position.x,this.body.position.y,80,80);
        pop();
    }
}