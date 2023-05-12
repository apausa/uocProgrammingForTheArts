function setup() {
    createCanvas(300, 300);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    const x = width / 2;
    const y = height / 2;
    const side = 100;
    const color = '#00F';
    
    background('#89D2DC');
  
    // square with fill
    noStroke();
    fill(color);
    square(x, y, side);
    
    // squares without fill
    noFill();
    stroke(color);
    strokeWeight(2);
    square(x, y, side * 1.5);
    square(x, y, side * 2);
  }
  
  