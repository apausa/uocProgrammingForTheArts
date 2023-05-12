function setup() {
	createCanvas(1024, 768);
  	noLoop();
}

function draw() {
	const x = width / 2;
	const y = height / 2;
  
  	background('#B3A47D');
	noStroke();
	fill(255);
	circle(x, y, 500);
}
