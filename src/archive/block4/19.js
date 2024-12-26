let shape = null;

function setup() {
  createCanvas(710, 400);
  rectMode(CENTER);
  shape = new Shape();
}

function draw() {
  background(255, 255, 255, 15); 
  
  shape.moveX();
  // shape.moveYSin();
  // shape.moveYCos();
  shape.moveYTan();
  shape.generate();
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = null;
    
    this.angle = PI;
    this.osc = height / 2;
  }
  
  moveYSin() {
    this.y = this.osc + (this.osc * sin(this.angle));
    this.angle += 0.01;
  }
  
  moveYCos() {
    this.y = this.osc + (this.osc * cos(this.angle));
    this.angle += 0.01;
  }
  
  moveYTan() {
    this.y = this.osc + (this.osc * tan(this.angle));
    this.angle += 0.01;
  }
  
  moveX() {
    this.x += 1;
  }
  
  generate() {
    fill(255, 204, 105);
    noStroke();
    circle(this.x, this.y, 30);
  }
}