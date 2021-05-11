class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		var options = {
			restitution:0.8,
			friction:3,
			density:30
		}
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()

			
	}

}