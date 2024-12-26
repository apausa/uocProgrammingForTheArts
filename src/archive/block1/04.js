function setup() {
    createCanvas(500, 500);
    background(200);
  }
  
  function draw() {
    const ellipse1Width = 50;
    
    ellipse(100, 200, ellipse1Width);
    ellipse(200, 200, ellipse1Width / 2);
  }
  