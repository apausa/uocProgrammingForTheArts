let shape = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  shape = new Shape();
}

function draw() {
  background('#AAA');

  shape.assign();
  shape.generate();
  shape.fall(16); // speed

  if (shape.yPos >= height)
    shape.reset();
}

class Shape {
  constructor() {
    this.yPos = 0; 
    this.currentPiece = 0;
    this.xMultipliers = [null, null, null, null];
    this.yMultipliers = [null, null, null, null];
  }

  assignYellowPiece() {
    const yellow = '255, 255, 0';
    this.xMultipliers = [-1, 1, -1, 1];
    this.yMultipliers = [-1, -1, 1, 1];

    stroke(`rgba(${yellow}, 1)`);
    fill(`rgba(${yellow}, 0.5)`);
  }
  
  assignBluePiece() {
    const blue = '0, 0, 255';
    this.xMultipliers = [-1, -1, -1, 1];
    this.yMultipliers = [-1, -3, 1, 1];

    stroke(`rgba(${blue}, 1)`);
    fill(`rgba(${blue}, 0.5)`);
  }
  
  assignRedPiece() {
    const red = '255, 0, 0';
    this.xMultipliers = [0, 0, 0, 0];
    this.yMultipliers = [-1, -3, 1, 3];

    stroke(`rgba(${red}, 1)`);
    fill(`rgba(${red}, 0.5)`);
  }
  
  assignGreenPiece() {
    const green = '0, 255, 0';
    this.xMultipliers = [-1, -1, 1, 1];
    this.yMultipliers = [-1, -3, -1, 1];
    
    stroke(`rgba(${green}, 1)`);
    fill(`rgba(${green}, 0.5)`);
  }
  
  assignMagentaPiece() {
    const magenta = '255, 0, 255';
    this.xMultipliers = [0, 0, -2, 2];
    this.yMultipliers = [-1, 1, 1, 1];

    stroke(`rgba(${magenta}, 1)`);
    fill(`rgba(${magenta}, 0.5)`);
  }
  
  assign() {
    switch(this.currentPiece) {
      case 0: this.assignYellowPiece(); break;
      case 1: this.assignBluePiece(); break;
      case 2: this.assignRedPiece(); break;
      case 3: this.assignGreenPiece(); break;
      case 4: this.assignMagentaPiece(); break;
      default: break;
    }
  }
    
  generate() {
    const module = 40;
    const halfModule = module / 2;

    for (let i = 0; i < 4; i++) {
      const x = (windowWidth / 2) + halfModule * this.xMultipliers[i];
      const y = this.yPos + halfModule * this.yMultipliers[i];

      square(x, y, module);
    }
  }

  fall(speed) {
    this.yPos = this.yPos + speed;
  }

  reset() {
    this.yPos = 0;
    this.currentPiece = round(random(0, 4));
  }
}