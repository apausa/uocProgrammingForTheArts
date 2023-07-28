let pattern = null;

function setup() {
  createCanvas(500, 500);
  noLoop();
  
  const grid = width / 8;
  const palette = ['#DDD', '#999', '#555', '#111'];

  pattern = new Pattern(grid, palette);
}

function draw() {
  noStroke(0);

  pattern.assign();
  pattern.background();
  pattern.render();
}

class Pattern { 
  constructor(grid, palette) { 
    this.grid = grid;
    this.shapes = [];
    this.radius = this.grid * 2;
    this.diameter = this.grid / 2;
    this.palette = palette;
  }
  
  triangle4(x, y) { 
    triangle(x, y, x, y + this.grid, x + this.grid, y + this.grid);
  }
  
  triangle3(x, y) { 
    triangle(x, y, x  + this.grid, y, x + this.grid, y + this.grid);
  }
  
  triangle2(x, y) { 
    triangle(x, y, x, y + this.grid, x + this.grid, y);
  }
  
  triangle1(x, y) { 
    triangle(x + this.grid, y + this.grid, x, y + this.grid, x + this.grid, y);
  }

  square(x, y) {
    square(x, y, this.grid);
  }

  render() {
   	for (let i = 0; i < this.grid; i++) {
      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];
        const color = round(random(0, this.palette.length - 1));

        fill(this.palette[color]);

        switch (this.shapes[i][j]) { 
          case 0: this.triangle1(x, y); break;
          case 1: this.triangle2(x, y); break;
          case 2: this.triangle3(x, y); break;
          case 3: this.triangle4(x, y); break;
          case 4: this.square(x, y); break;
          default: break;
  	}}}
  }

  background() {
    const bg = round(random(0, this.palette.length - 1));
    const index = this.palette.indexOf(this.palette[bg]);

    background(this.palette[bg]);
    this.palette.splice(index, 1);
  }

  assign() {  
    for (let i = 0; i < this.grid; i++) {
      this.shapes[i] = [];

      for (let j = 0; j < this.grid; j++) {
        this.shapes[i][j] = round(random(0, 4));
    }}
  }
}