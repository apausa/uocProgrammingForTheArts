let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw(){
  circleX = random(0, width);
  circleY = random(0, height);

  fill(random(256), random(256), random(256));
  ellipse(circleX, circleY, 32, 32);
}