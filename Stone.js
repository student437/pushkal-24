class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		var options = {
			restitution:0.8,
			friction:0.9,
			density:12
		}
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(Stonepos.x, Stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()

			
	}

}