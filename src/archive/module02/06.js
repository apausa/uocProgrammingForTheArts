let shape = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    const [x, y, w] = [width/2, height/2, 300];
  	shape = new Shape(x, y, w);
}

function mouseMoved() {
  shape.changeCursor(mouseX, mouseY);
}

function draw() {
    background("white");
  	shape.generate();
  
  	if (mouseIsPressed)
      shape.changeColor(mouseX, mouseY);
}

class Shape {
  constructor(x, y, w) {
    this.x = x;
    this.y = y; 
    this.w = w;
    this.c = '#000';
  }
  
  changeColor(px, py, c) {
    const d = dist(px, py, this.x, this.y);
    if (d < this.w / 2)
      this.c = '#00F';
  }
  
  changeCursor(px, py) {
    const d = dist(px, py, this.x, this.y);
  	cursor((d < this.w / 2) ? HAND : ARROW);
  }
  
  generate() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.w);
  }
}
