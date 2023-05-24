let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  shape = new Shape();
}

function draw() {
  background(0, 0, 0, 8);
  
  shape.generate();
  shape.animate();
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = height / 2;
   	this.d = width / 4; 
  }
  
  animate() {
    const quarter = this.d; 
   
    if (this.x < quarter)
      this.x += 2;
    else if (this.x >= quarter && this.x < quarter * 2)
      this.x += 4;
  }
  
  generate() {
    noStroke();
    fill('#FFF');
    circle(this.x, this.y, this.d);
  }
}