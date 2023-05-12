let lineY = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  const halfWidth = width / 2;
  const brightness = map(lineY, 0, width, 0, 255)

  background('#000');

  fill(brightness);
  noStroke();
  circle(halfWidth, height / 2, halfWidth)
  
  stroke('#FFF');
  lineY = (lineY === height) ? 0 : lineY + 1;
  line(0, lineY, width, lineY);
}