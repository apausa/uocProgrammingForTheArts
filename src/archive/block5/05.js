const types = {SLOW: 'SLOW', FAST: 'FAST', STOP: 'STOP'}; 
let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  shape = new Shape();
}

function draw() {
  background(0, 0, 0, 8);
  
  shape.generate();
  shape.animate(types.SLOW);
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = height / 2;
   	this.d = width / 4; 
  }
  
  animate(type) {
    if (this.x > width / 2 || type === types.STOP) return; 
    if (type === types.SLOW) this.x += 2;
    if (type === types.FAST) this.x += 4;
  }
  
  generate() {
    noStroke();
    fill('#FFF');
    circle(this.x, this.y, this.d);
  }
}