function setup() {
    createCanvas(800, 800);
}

function draw() {
  	noFill();
  
    (mouseIsPressed) ? stroke(255, 63, 145) : stroke(0);
    ellipse(mouseX, mouseY, 80, 80);
}

