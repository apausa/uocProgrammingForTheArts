var parrafo = "";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");
  fill(50);
  textSize(24);
  textLeading(30);
  text(parrafo, width / 2, 100, 100, 300);
}

function keyTyped() {
  parrafo += key;
}