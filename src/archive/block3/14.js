const shapes = [];

function setup() {
  createCanvas(1024, 768);
  rectMode(CENTER);
  
  const [x, y, w, h] = [500, 300, 100, 80]
  const shape = new Shape(x, y, w, h);
  
  shapes.push(shape);
}

function mousePressed() {
  shapes[0].click(mouseX, mouseY);
}

function mouseReleased() {
  shapes[0].drop();
}

function mouseDragged() {
  shapes[0].drag(mouseX, mouseY);
}

function draw() {
  background('#FFF'); 

  shapes[0].generate();
}

class Shape {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y; 
    this.w = w; 
    this.h = h;
    this.isClicked = false;
  }
  
  click(px, py) {
    const dx = this.x - px;
    const dy = this.y - py;
    
    const isClickedHorizontally = (dx < this.w / 2) && (dx > -this.w / 2);
    const isClickedVertically = (dy < this.h / 2) && (dy > -this.h / 2);
    
    if (isClickedHorizontally && isClickedVertically)
      this.isClicked = true;
  }
  
  drag(px, py) {
    if (this.isClicked) {
      this.x = px;
      this.y = py;
    }
  }

  drop() {
    this.isClicked = false;
  }
  
  generate() {
    fill(100);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
