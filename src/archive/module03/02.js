let img = null;

function preload() {
  img = loadImage("https://codelab.uoc.edu/filemanager/source_repo/pablu/artboard.png")
}

function setup() {
  createCanvas(500, 500);
  img.loadPixels();
  background(img);
}

function draw() {
  const c = img.get(mouseX, mouseY);
  
  noStroke();
  fill(c);
  circle(mouseX, mouseY, 24);
}
