function setup() {
	createCanvas(1024, 768);
  	noLoop();
} 

function draw() {
  	const x = width / 2;
	const y = height / 2;
  	const color = 255;
  
  	background('#B3A47D');
  
  	// line
  	stroke(color);
	strokeWeight(2);
	line(0, y, width, y)
  
  	// circle
	noStroke;
	fill(color);
	circle(x, y, 500);
}