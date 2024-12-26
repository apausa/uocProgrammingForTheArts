const shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  for (let i = 0; i < 100; i++) {
    const s = new Shape();
    shapes.push(s);
  }
}

function draw() {
  background('#FFF');
  
  shapes.forEach(shape => {
    shape.generate();
  })
  
  console.log(shapes);
}

class Shape {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
  }
  
  generate() {
    circle(this.x, this.y, 32)
  }
}