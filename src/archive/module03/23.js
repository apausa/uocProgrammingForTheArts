let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  shape = new Shape();
}

function draw() {
  background('#AAA');

  shape.generate();
  shape.fall(16); // speed
}

class Shape {
  constructor() {
    this.y = 0; 
    this.currentPiece = 0;
    this.multiplierX = [null, null, null, null];
    this.multiplierY = [null, null, null, null];
  }
  
  fall(speed) {
    this.y = this.y + speed;

    if (this.y >= (height)) {
      this.y = 0;
      this.currentPiece = round(random(0, 4));
    }
  }
  
  transform() {
    const side = 40;
    const hw = windowWidth / 2;
    this.module = side / 2;
    
    for (let i = 0; i < 4; i++) {
      const x = hw + this.module * this.multiplierX[i];
      const y = this.y + this.module * this.multiplierY[i];

      square(x, y, side);
    }
  }

  assignMetadata0() {
    const yellow = '255, 255, 0';
    this.multiplierX = [-1, 1, -1, 1];
    this.multiplierY = [-1, -1, 1, 1];

    stroke(`rgba(${yellow}, 1)`);
    fill(`rgba(${yellow}, 0.5)`);
  }
  
  assignMetadata1() {
    const blue = '0, 0, 255';
    this.multiplierX = [-1, -1, -1, 1];
    this.multiplierY = [-1, -3, 1, 1];

    stroke(`rgba(${blue}, 1)`);
    fill(`rgba(${blue}, 0.5)`);
  }
  
  assignMetadata2() {
    const red = '255, 0, 0';
    this.multiplierX = [0, 0, 0, 0];
    this.multiplierY = [-1, -3, 1, 3];

    stroke(`rgba(${red}, 1)`);
    fill(`rgba(${red}, 0.5)`);
  }
  
  assignMetadata3() {
    const green = '0, 255, 0';
    this.multiplierX = [-1, -1, 1, 1];
    this.multiplierY = [-1, -3, -1, 1];
    
    stroke(`rgba(${green}, 1)`);
    fill(`rgba(${green}, 0.5)`);
  }
  
  assignMetadata4() {
    const magenta = '255, 0, 255';
    this.multiplierX = [0, 0, -2, 2];
    this.multiplierY = [-1, 1, 1, 1];

    stroke(`rgba(${magenta}, 1)`);
    fill(`rgba(${magenta}, 0.5)`);
  }
  
  generate() {
    switch(this.currentPiece) {
      case 0:
        this.assignMetadata0();
        this.transform();
        this
        break;
      case 1:
        this.assignMetadata1();
        this.transform();
        break;
      case 2:
        this.assignMetadata2();
        this.transform();
        break;
      case 3:
        this.assignMetadata3();
        this.transform();
        break;
      case 4:
        this.assignMetadata4();
        this.transform();
        break;
      default: break;
    }
  }
}