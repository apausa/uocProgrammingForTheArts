const sum = (val1, val2) => val1 + val2;

function setup() {
  createCanvas(400, 400);
  background('#396cc6'); 
  noLoop();
}

function draw() {
  const val1 = random(0, width);
  const val2 = random(0, height);
  
  fill(255);
  textAlign(CENTER);
  textSize(21);
  text(sum(val1, val2), width / 2, height / 2);
}

