const types = {SLOW: 'SLOW', FAST: 'FAST'}; 
const shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  const s = new Shape();
  shapes.push(s);
}

function draw() {
  background(0, 0, 0, 8);
  
  shapes[0].generate();
  shapes[0].animate(types.SLOW);
}

class Shape {
  constructor() {
    this.x = 0;
    this.y = height / 2;
   	this.d = width / 4; 
  }
  
  animate(type) {
    if (this.x > width / 2) return; 
    if (type === types.SLOW) this.x += 2;
    if (type === types.FAST) this.x += 4;
  }
  
  generate() {
    noStroke();
    fill('#FFF');
    circle(this.x, this.y, this.d);
  }
}