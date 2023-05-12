let img = null;

function preload() {
  img = loadImage("https://codelab.uoc.edu/filemanager/source_repo/pablu/FhbRgcOWQAABTsk.jpg")
}

function setup() {
  createCanvas(500, 500);
  background('#FFF');
}

function draw() {
  image(img, 0, 0, 500, 500)
 
  if (keyIsDown(49)) filter(THRESHOLD)
  else if (keyIsDown(50)) filter(GRAY)
  else if (keyIsDown(51)) filter(OPAQUE)
  else if (keyIsDown(52)) filter(INVERT)
  else if (keyIsDown(53)) filter(POSTERIZE)
  else if (keyIsDown(54)) filter(BLUR)
  else if (keyIsDown(55)) filter(ERODE)
  else if (keyIsDown(56)) filter(DILATE)
}