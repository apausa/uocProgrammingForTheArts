function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 100);
  }
  
  function draw() {
    background(0, 0, 0);
  
    // Top-left corner
    push();
    translate(width / 4, height / 4);
    rotate(radians(frameCount));
    flowerGrad(5);
    pop();
  
    // Top-right corner
    push();
    translate(width - width / 4, height / 4);
    rotate(radians(frameCount * 5));
    flowerGrad(2);
    pop();
  
    // Bottom-left corner
    push();
    translate(width /4 , height - height / 4);
    rotate(radians(frameCount * 10));
    flowerGrad(15);
    pop();
  
    // Bottom-right corner
    push();
    translate(width - width / 4, height - height / 4);
    rotate(radians(frameCount / 4));
    flowerGrad(12);
    pop();
  }
  
  function flowerGrad(petal) {
    let radius = width / 6;
  
    for (let i = radius; i > 0; i -= petal) {
      for (let j = 0; j < 8; j++) {
        push();
        ellipseMode(CORNER);
        rotate(TWO_PI * j / 4);
        let hue = map(i, 0, radius, 40, 100);
        stroke(hue, 100, 100);
        fill(hue, 100, 100);
        ellipse(0, 0, i);
        pop();
  
        // center of the flower
        ellipseMode(CENTER);
        noStroke();
        fill(15, 0, 0);
        ellipse(0, 0, width / 36);
      }
    }
  }