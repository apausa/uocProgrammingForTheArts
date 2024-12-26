let slider = null;

function setup() {
  createCanvas(500, 500);
  
  slider = createSlider(10, 400, 200);
  slider.position(10, 10);
  slider.style('width', '120px');
  
  rectMode(CENTER);
}

function drawBackground() {
  background(200);
  
  strokeWeight(6);
  stroke(0);
  line(0, height, width, height);
}

function drawSnowman() {
  const hw = width / 2;
  const d = slider.value();
  const [halfD, quarterD] = [d / 2, d / 4];
  const hatHeight = height - d - halfD;
  
  noStroke();
  
  fill(255);
  circle(hw, height - halfD, d);
  circle(hw, height - quarterD - d, halfD);
  
  fill(0);
  rect(hw, hatHeight, halfD, d / 8);
  rect(hw, hatHeight - (d / 8), quarterD, quarterD);
}

function draw() {
  drawBackground();
  drawSnowman();
}