let shape = null;

function setup() {
	createCanvas(1024, 768);
  
  	const [x, y, w] = [width/2, height/2, 300];
  	shape = new Shape(x, y, w);
}

function draw() {
  	background("white");
  	shape.generate();
  
   	if (keyIsDown(82))
      shape.changeColor('#F00')
    else if (keyIsDown(71))
      shape.changeColor('#0F0')
    else if (keyIsDown(66))
      shape.changeColor('#00F')
  	else
      shape.changeColor('#000');
}

class Shape {
  constructor(x, y, w) {
    this.x = x;
    this.y = y; 
    this.w = w;
    this.c = '#000';
  }
  
  changeColor(c) {
    this.c = c;
  }
  
  generate() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.w);
  }
}
