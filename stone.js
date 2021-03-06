class Stone{
	constructor(x,y,r)
	{
		var options = {
			isStatic:true,
			restitution :0,
            friction :1,
			}
            this.body=Bodies.circle(x,y,r,options);
		this.image=loadImage("images/stone.png")
		
		World.add(world, this.body);
		this.x=x;
		this.y=y;
		this.r=r
	}

	display()
	{
		var stone=this.body.position;
			
		push()
		translate(stone.x, stone.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}