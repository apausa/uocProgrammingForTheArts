// Making Shapes Move with Mouse Position

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(mouseX, 0, mouseY)
  ellipse(mouseX, mouseY, 32, 32);
}