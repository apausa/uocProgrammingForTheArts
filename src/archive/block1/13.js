function setup() {
    createCanvas(1024, 768);
 }
 
 function draw() {
    const halfWidth = width / 2;
    const halfHeight = height / 2;
   
    background("#231A33");
    noStroke();
    ellipseMode(CENTER);
 
    fill("rgba(16, 64, 63, 0.5)");
    ellipse(halfWidth,halfHeight, 350);
   
    fill("rgba(63, 16, 64, 0.5)");
    ellipse(halfWidth, halfHeight, 300);
   
    fill("rgba(64, 63, 16, 0.5)");
    ellipse(halfWidth,halfHeight, 250);
    
    fill("rgba(16, 64, 63, 1)");
    ellipse(halfWidth, halfHeight, 200);
   
    fill("rgba(63, 16, 64, 1)");
    ellipse(halfWidth, halfHeight, 150);
   
    fill("rgba(64, 63, 16, 1)");
    ellipse(halfWidth, halfHeight, 100);
   
    fill("#FFF");
    ellipse(halfWidth, halfHeight, 50);
 }
 