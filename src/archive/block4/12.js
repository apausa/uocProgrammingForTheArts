let parrafo = ""; // global variable

function setup() {
  createCanvas(500, 500);
  
  background("white");
  fill(50);
  textSize(24);
  textLeading(30);
}

function draw() {
  text(parrafo, width / 2, 100, 100, 300);
}

function keyTyped() {
  parrafo += key;
}
