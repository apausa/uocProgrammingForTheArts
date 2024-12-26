let x = 50; // global variable
let velX = 5; // global variable

function setup() {
  createCanvas(500, 500);
}

function draw() {
  const y = 50
  x = x + velX;

  background('#858585');
  noStroke();
  fill('#FFF')
  circle(x, y, y);
 
  if (x > (y / 2))
    velX = -velX;
  if (x < width - (y / 2))
    velX = -velX;
}