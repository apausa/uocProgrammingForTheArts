let shape = null;

function setup() {
    createCanvas(500, 500);
  	ellipseMode(CENTER);
  
  	shape = new Shape(); 
}

function draw() {
  background(255);
  shape.generate();
  shape.update();
}

class Shape {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.counter = 0; 
  }
  
  update() {
    this.counter++;
  }
  
  generate() {
    noStroke();
  	fill((this.counter < 10 || this.counter > 100) ? '#000' : '#00F')
    circle(this.x, this.y, 200);
  }
}