class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        var options={
            bodyA:bodyA.body,
            bodyB:bodyB.body,
            pointB:{x:offsetX,y:offsetY},
            

        }
        this.bodyA=bodyA;
        this.bodyB=bodyB;
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push()        
        stroke("white")
        line(this.bodyA.body.position.x,this.bodyA.body.position.y,(this.chain.bodyB.position.x+this.offsetX),(this.chain.bodyB.position.y+this.offsetY));
        pop();
    }
}