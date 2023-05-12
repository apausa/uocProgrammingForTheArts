let [tx, ty] = [0, 0];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let x = noise(tx) * width;
  let y = noise(ty) * height;
  
  background(0, 7);
  
  noStroke();
  fill(255);
  circle(x, y, 120);
  
  stroke(255);
  line(x, height, x, height - 32);
  line(0, y, 32, y);

  tx += random(0.01);
  ty += random(0.01);
}