function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    const [ciX, ciY] = [random(width), random(height)];
    const sqS = random(width / 2);
    const [trX, trY, trS] = [150, 300, 300];
  
    background(220);
    noStroke();
    
    // Circle
    fill(0, 0, 255);
    circle(ciX, ciY, 200);
    
    // Square
    fill('red');
    rectMode(CENTER);
    square(150, 150, sqS);
    
    // Triangle
    fill(`rgba(255, 255, 0, ${random(0, 1)})`);
    triangle(
      trX - trS /3, trY,
      trX + trS /3, trY,
      trX, trY - trS / 2);
  }
  