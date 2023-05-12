function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    noLoop();
  
  }
  
  function draw() {
    background('white');
    
    for (let  i = 0; i < 4; i++) {
      // color
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);
      const t = random(0, 255);
      const c = {r, g, b, t}; 
      
      // square
      const x = random(0, width / 4);
      const y = random(0, height / 4);
      const w = random(0, width / 2);
      const sq = {x, y, w}
    
      // angle
      const a = random(0, 360);
  
      // rotate over own axis
      if (i === 0)  translate(width / 2, height / 2);
      
      drawShape(c, sq, a);
    }
  }
  
  function drawShape(c, sq, a) {
    const {r, g, b, t} = c; 
    const {x, y, w} = sq; 
    
    noStroke();
    blendMode(MULTIPLY);
    fill(r, g, b, t);
    rotate(a);
    square(x, y, w);
  }