let shape = null; 

function setup() {
    createCanvas(600, 400);
  	shape = new Shape(); 
}

function draw() {
  shape.render();
  shape.update();
}

class Shape {
  constructor() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.counter = 0;
  }
  
  update() {
    this.counter++
    
    if (this.counter > 200){
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.counter = 0;
    }
  }

  render() {
    background(this.r, this.g, this.b);
  }
  
  
}