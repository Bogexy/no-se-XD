class Link {
constructor(bodyA,bodyB){
var lastLink= bodyA.body.bodies.length-2;
this.Link = Constraint.create({bodyA:bodyA.body.bodies[lastLink],
pointA:{x:0,y:0}, pointB:{x:0,y:0},bodyB:bodyB,length:-10,stiffness:0.01
});
World.add(Engine.world,this.Link);


}
}