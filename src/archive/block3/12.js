let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  shape = new Shape(); 
}

function drawBackground() {
  const [y, w] = [height / 2, 20];
  const module = width / 7;

  background('#000');
  
  fill('#FFF')
  ellipse(module * 3, y, w);
  ellipse(module * 4, y, w);
  ellipse(module * 5, y, w);
}

function draw() {
  drawBackground();
  shape.generate();
  
  if (keyIsDown(LEFT_ARROW))
    shape.moveLeft();
  if (keyIsDown(RIGHT_ARROW))
    shape.moveRight(); 
}

class Shape {
  constructor() {
    this.x = (width / 7) * 2;
    this.y = height / 2; 
    this.w = 80;
  }
 
  moveLeft(){
    const leftMargin = this.x - (this.w / 2);
    
    if (leftMargin  > 1)
      this.x = this.x - 1;
  }
  
  moveRight(){
    const rightMargin = this.x + (this.w / 2);
    
    if (rightMargin < (width - 1))
      this.x = this.x + 1;
  }

  generate() {
    noStroke();
    fill('#FF0');
    arc(this.x, this.y, this.w, this.w, QUARTER_PI, -QUARTER_PI);
  }
}