function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background('white');
  
  for (let  i = 0; i < 4; i++) {
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    const a = random(0, 255);
    
    const x = random(0, width / 4);
    const y = random(0, height / 4);
    const w = random(0, width / 2);
    
    const color = {r, g, b, a}; 
    const properties = {x, y, w}
    const angle = random(0, 360);
    
    if (i === 0) translate(width / 2, height / 2);
    drawShape(color, properties, angle);
  }
}

function drawShape(color, properties, angle) {
  const {r, g, b, a} = color; 
  const {x, y, w} = properties; 
  
  noStroke();
  blendMode(MULTIPLY);
  fill(r, g, b, a);
  rotate(angle);
  square(x, y, w);
}