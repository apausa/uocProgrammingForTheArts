let img = null;

function preload() {
  img = loadImage("https://codelab.uoc.edu/filemanager/source_repo/pablu/artboard.png")
}

function setup() {
  createCanvas(500, 500);
  background('#FFF');
}

function draw() {
  image(img, 0, 0, 500, 500)
 
  if (keyIsDown(49)) filter(THRESHOLD) // 1
  else if (keyIsDown(50)) filter(GRAY) // 2
  else if (keyIsDown(51)) filter(OPAQUE) // 3
  else if (keyIsDown(52)) filter(INVERT) // 4
  else if (keyIsDown(53)) filter(POSTERIZE) // 5
  else if (keyIsDown(54)) filter(BLUR) // 6
  else if (keyIsDown(55)) filter(ERODE) // 7
  else if (keyIsDown(56)) filter(DILATE) // 8
}
