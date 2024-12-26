let position = 0; // global variable

function setup() {
  createCanvas(500, 500);
}

function draw() {
  const size = 100;
  
  position = (position === width + (size / 2))
    ? (0 - (size / 2)) : position + 1; 
  
  background("#B3A47D");
  noStroke();
  fill(255);
  circle(position, position, 100);
}
