const canvasWH = 500;
let circleX = canvasWH / 2;
let circleY = canvasWH / 2;

function setup() {
  createCanvas(canvasWH, canvasWH);
}

function draw() {
  circleX = (circleX === width) ? 0 : circleX + 1; 
  circleY = (circleX === height) ? 0 : circleY + 1; 
  
  background("#B3A47D");
  noStroke();
  fill(255);
  circle(circleX, circleY, 100);
}