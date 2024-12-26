let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  shape = new Shape();
}

function mouseMoved() {
  shape.changePosition(mouseX, mouseY);
}

function draw() {
  background('#AAA');
  
  line(40, 0, 40, height);
  line(width - 40, 0, width - 40, height);
  
  shape.generate();
}

class Shape {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.w = 40; 
  }
  
  changePosition(px, py) {
    const isHovered = dist(px, py, this.x, this.y) < this.w;
    const leftMargin = (px - this.w) > this.w;
    const rightMargin = (px + this.w) < (width - this.w);

    if (isHovered && leftMargin && rightMargin)
      this.x = px
  }
  
  generate() {
    const yellow = '255, 255, 0';
    const module = this.w / 2;

    stroke(`rgba(${yellow}, 1)`);
    fill(`rgba(${yellow}, 0.5)`);
    square(this.x - module, this.y - module, this.w);
    square(this.x + module, this.y - module, this.w);
    square(this.x - module, this.y + module, this.w);
    square(this.x + module, this.y + module, this.w);
  }
}