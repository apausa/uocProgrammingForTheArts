/* Mi idea consiste en hacer un patrón generativo para el packing
 * de una vela. 
 */

let pattern = null;

function setup() {
  createCanvas(500, 500);
   // Point 6. No loop
  noLoop();
  
  const grid = width / 8;

  pattern = new Pattern(grid);
}

function draw() {
  noStroke(0);

  pattern.render();
}

class Pattern { 
  constructor(grid) { 
    this.grid = grid;
    this.shapes = this.assign();
    this.radius = this.grid * 2;
    this.diameter = this.grid / 2;
  }

  triangle2(x, y) {
    triangle(x, y, x, y + this.grid, x + this.grid, y);
  }

  triangle1(x, y) {
    triangle(x + this.grid, y + this.grid, x, y + this.grid, x + this.grid, y);
  }

  arc2(x, y) {
    arc(x, y, this.radius, this.radius, 0, HALF_PI);
  }

  arc1(x, y) {
    arc(x + this.grid, y + this.grid, this.radius, this.radius, PI, HALF_PI + PI);
  }

  square(x, y) {
    square(x, y, this.grid);
  }

  render() {
    noFill();
    stroke('#000');

   	for (let i = 0; i < this.grid; i++) {
      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];

        switch (this.shapes[i][j]) { 
          case 0: this.triangle1(x, y); break;
          case 1: this.triangle2(x, y); break;
          case 2: this.arc1(x, y); break;
          case 3: this.arc2(x, y); break;
          case 4: this.square(x, y); break;
          default: break;
  	}}}
  }

  assign() {  
    const arr = [];

    for (let i = 0; i < this.grid; i++) {
      arr[i] = [];
      for (let j = 0; j < this.grid; j++) {
        arr[i][j] = round(random(0, 4)); // Different types
    }}

    return arr;
  }
}