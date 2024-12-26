// Iteration 3. Only one nested for loop.

let pattern = null;

function setup() {
  createCanvas(512, 512);
  noLoop();
  
  const grid = width / 8;
  let palette = ['#FFF', '#AAA', '#555', '#10069F'];

  pattern = new Pattern(grid, palette);
}

function mousePressed(){
  save("candle.png")
}

function draw() {
  noStroke(0);

  pattern.draw();
}

class Pattern { 
  constructor(grid, palette) { 
    this.grid = grid;
    this.palette = palette;
    this.metadata =  [];
    this.radius = this.grid * 2;
  }

  renderRightArc(x, y, backgroundColor) { 
    const figureColor = this.returnDifferentColorThan(backgroundColor);
    
    fill(`${figureColor}`); 
    arc(x + this.grid, y + this.grid, this.radius, this.radius, PI, HALF_PI + PI);
  }

  renderLeftArc(x, y, backgroundColor) { 
    const figureColor = this.returnDifferentColorThan(backgroundColor);
        
    fill(`${figureColor}`); 
    arc(x, y, this.radius, this.radius, 0, HALF_PI);
  }

  returnDifferentColorThan(previousColor) { 
    const randomIndex = round(random(0, this.palette.length - 1));
    const currentColor = this.palette[randomIndex];
    
    return (previousColor === currentColor)
      ? this.returnDifferentColorThan(previousColor) 
      : currentColor;
  }

  renderBackgroundReturnColor(x, y) { 
    const backgroundColor = this.returnDifferentColorThan(null);

    fill(`${backgroundColor}`);
    square(x, y, this.grid);

    return backgroundColor; 
  }

  draw() {
    for (let i = 0; i < this.grid; i++) { 
      this.metadata[i] = [];

      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];
        const backgroundColor = this.renderBackgroundReturnColor(x, y);
        
        this.metadata[i][j] = round(random(0, 2));
        switch (this.metadata[i][j]) {
          case 0: this.renderLeftArc(x, y, backgroundColor); break;
          case 1: this.renderRightArc(x, y, backgroundColor); break;
          default: break;
        }
      }
    }
  }
}