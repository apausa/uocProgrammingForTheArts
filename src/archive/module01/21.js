let pattern = null;

function setup() {
  createCanvas(500, 500);
  
  const grid = width / 15;
  pattern = new Pattern(grid);
}

function draw() {
  background(255);
  noStroke(0);
  pattern.render();
  pattern.update();
}

class Pattern {
  constructor(grid) {
    this.grid = grid;
    this.shapes = this.assign();
  }
  
  update() {
    if (frameCount % 200 === 1)
      this.shapes = this.assign();
  }
 
  generateCircle(x, y) {
    fill('lightPink');
    circle(x + (this.grid / 2), y + (this.grid / 2), this.grid);
  }
  
  generateArc1(x, y) {
    fill('orangeRed');
    arc(x, y, this.grid * 2, this.grid * 2, 0, HALF_PI);
  }
  
  generateArc2(x, y) {
    fill('lightBlue');
    arc(x + this.grid, y, this.grid * 2, this.grid * 2, HALF_PI, PI);
  }

  generateSquare(x, y) {
    fill('midnightBlue');
    square(x, y, this.grid);
  }
  
  generateTriangle(x, y) {
    fill('lightGray');
    triangle(x, y, x, y + this.grid, x + this.grid, y + this.grid);
  }
  
  render() {
   	for (let i = 0; i < this.grid; i++) {
      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];
      
        switch (this.shapes[i][j]) {
          case 0: this.generateSquare(x, y); break;
          case 1: this.generateCircle(x, y); break;
          case 2: this.generateArc1(x, y); break;
          case 3: this.generateArc2(x, y); break;
          case 4: this.generateTriangle(x, y); break;
          default: break;
  	}}}
  }
  
  assign() {
    const arr = [];

    for (let i = 0; i < this.grid; i++) {
      arr[i] = [];
      for (let j = 0; j < this.grid; j++) {
        arr[i][j] = round(random(0, 4));
    }}

    return arr;
  }
}