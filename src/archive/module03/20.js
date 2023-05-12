let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  shape = new Shape();
}

function draw() {
  background(255, 255, 255, 15); 
  
  shape.generate();
  shape.move();
}

class Shape {
  constructor() {
    this.osc = height / 4;
    this.angle = PI;
    this.incrementX = 0;
    this.incrementY = 0;
  }
  
  move() {
    this.incrementX = this.osc * cos(this.angle);
    this.incrementY = this.osc * sin(this.angle);
    this.angle += 0.01;
  }
  
  generate() {
    const x = width / 2 + this.incrementX;
    const y = height / 2 + this.incrementY;
    
    fill(0);
    noStroke();
    circle(x, y, this.incrementY);
  }
}
