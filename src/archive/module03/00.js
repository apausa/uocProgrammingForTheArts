let img = null;

function preload() {
  img = loadImage("https://codelab.uoc.edu/filemanager/source_repo/pablu/FhbRgcOWQAABTsk.jpg")
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  background('#FFF');
}

function generate(measure) {
  return random(-measure, measure);
}

function draw() {
  // La imagen es muy grande como para dividirla por un cuarto.
  image(img, generate(width), generate(height), 100, 100)
}
