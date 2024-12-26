const shapes = [];

function setup() {
	createCanvas(1024, 768);
  
  	const [x, y, w] = [width/2, height/2, 300];
  	const shape = new Shape(x, y, w);

  	shapes.push(shape);
}

function draw() {
  	background("white");
  	shapes[0].generateEllipse();
  	
  	if (keyIsDown(82))
      shapes[0].changeColor('#F00')
    else if (keyIsDown(71))
      shapes[0].changeColor('#0F0')
    else if (keyIsDown(66))
      shapes[0].changeColor('#00F');
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
  
  generateEllipse() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.w);
  }
}
