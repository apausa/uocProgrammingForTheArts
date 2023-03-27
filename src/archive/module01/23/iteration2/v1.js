// Iteration 2. Background is individual. 

let pattern = null;

function setup() {
  createCanvas(500, 500);
  noLoop();
  
  const grid = width / 8;
  const palette = ['#FFF', '#AAA', '#555', '#000'];

  pattern = new Pattern(grid, palette);
}

function draw() {
  noStroke(0);

  pattern.render();
}

class Pattern { 
  constructor(grid, palette) { 
    this.grid = grid;
    this.shapes =  this.returnShapes();
    this.radius = this.grid * 2;
    this.diameter = this.grid / 2;
    this.palette = palette;
  }

  arc1(x, y) {
    arc(x, y, this.radius, this.radius, 0, HALF_PI);
  }

  arc0(x, y) {
    arc(x + this.grid, y + this.grid, this.radius, this.radius, PI, HALF_PI + PI);
  }
  
  returnColor(previousColor) {
    const currentColor = this.palette[round(random(0, this.palette.length - 1))];

    return (previousColor === currentColor)
      ? this.returnColor(previousColor)
      : currentColor;
  }

  render() {
   	for (let i = 0; i < this.grid; i++) {
      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];
        const background = this.returnColor(null);
        const figure = this.returnColor(background);

        fill(`${background}`)
        square(x, y, this.grid);

        fill(`${figure}`);
        switch (this.shapes[i][j]) { 
          case 0: this.arc0(x, y); break;
          case 1: this.arc1(x, y); break;
          default: break;
  	}}}
  }

  returnShapes() {  
    let arr = [];

    for (let i = 0; i < this.grid; i++) {
      arr[i] = [];

      for (let j = 0; j < this.grid; j++) {
        arr[i][j] = round(random(0, 2));
    }}

    return arr;
  }
}