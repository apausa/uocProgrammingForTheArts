let x = 0; // global variable
const type = {SLOW: 'SLOW', FAST: 'FAST'}; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {  
  x = (x < width) ? (x + speed(type.FAST)) : 0;
  
  background("black");
  stroke("white");
  strokeWeight(1);
  line(x, 0, x, height);
}

function speed(mode) {
  if (mode === type.SLOW) return 8;
  else if (mode === type.FAST) return 16;
  else return 0; 
}
