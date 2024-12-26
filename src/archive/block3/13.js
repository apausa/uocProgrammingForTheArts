let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  shape = new Shape();
}

function draw() {
  background('#AAA');
  
  line(40, 0, 40, height);
  line(width - 40, 0, width - 40, height);
  
  shape.generate();
  
  if (keyIsDown(LEFT_ARROW))
    shape.moveLeft();
  else if (keyIsDown(RIGHT_ARROW))
    shape.moveRight(); 
}

class Shape {
  constructor(x, y, w) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.w = 40; 
  }
  
  moveLeft() {
    const insideLeftMargin = (this.x - this.w) > (this.w + 1);
    if (insideLeftMargin) this.x = this.x - 1;
  }
  
  moveRight() {
    const insideRightMargin = (this.x + this.w) < (width - this.w - 1);
    if (insideRightMargin) this.x = this.x + 1;
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