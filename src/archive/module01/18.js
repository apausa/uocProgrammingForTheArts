function setup() {
	createCanvas(600, 400);
  	noLoop();
}

function draw() {
  	let y = 0;
  	background(255);

    while(y < height / 2) {
      y += 10;
      strokeWeight(0.5);
      stroke(0);
      line(0, y, width, y);
    }
}