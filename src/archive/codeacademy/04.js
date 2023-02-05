let t; 
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  t = 0;
}

function draw() {
  background(0, 16);

  noStroke();
  fill(255);

  x = width * noise(t + 8);
  y = height * noise(t + 16);
  ellipse(x, y, 150, 150);
  t += 0.01;
}