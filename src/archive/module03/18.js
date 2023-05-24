let y = 50; // global variable
let velY = 5; // global variable

function setup() {
  createCanvas(500, 500);
}

function draw() {
  const x = width / 2;
  const d = 50;
  y = y + velY;
  
  if (y === (d / 2) || y === height - (d / 2)) velY = -velY;
  
  background((velY < 0) ?  '#000' : '#FFF')
  fill((velY < 0) ?  '#FFF' : '#000')
  noStroke();
  circle(x, y, d);
}