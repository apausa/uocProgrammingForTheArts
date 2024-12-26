const shapes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("AAA");
  
  	const w = width / 16;
    for (let i = 0; i < 3; i++) {
    	const x = ((width / 4) * i) + (width / 4);
     	const y = height / 2;
       	const shape = new Shape(x, y, w);
      
      	shapes.push(shape);
  	}
}

function mouseMoved() {
  shapes.forEach(shape => {
    shape.changeSize(mouseX, mouseY);
  })
}

function mousePressed() {
  shapes.forEach(shape => {
    shape.changeBackground(mouseX, mouseY);
  })
}

function draw() {
  shapes.forEach(shape => {
    shape.generateEllipse()
  });
}

class Shape {
  constructor(x, y, w) {
    this.x = x;
    this.y = y; 
    this.w = w;
    this.stroke = true;
    this.fill = false; 
  }
  
  changeSize(px, py) {
    const d = dist(px, py, this.x, this.y);
    
    if (d < this.w / 2) {
      this.w = width / 8;
      this.stroke = false;
      this.fill = true; 
    }
  }
  
  changeBackground(px, py) {
    const d = dist(px, py, this.x, this.y);

    if (d < this.w / 2)
      background("#FF0");
  }
  
  generateEllipse() {
    this.stroke ? stroke('#000') : noStroke();
    this.fill ? fill('#000') : noFill();
    
    ellipse(this.x, this.y, this.w);
  }
}
