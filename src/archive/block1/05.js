function setup() {
    createCanvas(400, 250);
  }
  
  function draw() {
    background('#f5ead7');
  
    fill('#4357AD');
    noStroke();
    circle(0, 0, 400);
    
    noFill();
    strokeWeight(25);
    stroke('#FFCA60');
    circle(400, 250, 250);
  }
  