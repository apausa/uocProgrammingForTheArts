let [tx, ty] = [0, 0]; // global variable

function setup() {
  createCanvas(400, 400);
  
  tx = random(width);
  ty = random(height);
}

function draw() {
  // map noise to position
  const x = map(noise(tx), 0, 1, 0, width);
  const y = map(noise(ty), 0, 1, 0, height);
  
  background(0, 7);
  
  // draw circle
  noStroke();
  fill(255);
  circle(x, y, 120);
  
  // draw line
  stroke(255);
  line(x, height, x, height - 32);
  line(0, y, 32, y);

  // increment sequence 
  tx += 0.01;
  ty += 0.01;
}