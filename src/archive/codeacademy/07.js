function setup() {
    createCanvas(windowWidth, windowHeight);
  }
   
  function draw() {
    background(0);
    noStroke();
  
    for (let i = 0; i < 8; i++) {
      let alpha = 64 + i;
      let size = (width / 2) - (i * 32);
   
      fill(255, 255, 255, alpha);
      ellipse(width / 2, height / 2, size, size);
    }
  }