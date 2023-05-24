let img = null;

function preload(){
  img = loadImage("https://codelab.uoc.edu/filemanager/source_repo/acalosci/Obama_482.jpg");
}

function setup() {
  createCanvas(482, 482);
  img.loadPixels();
  background(img);
}

function mousePressed(){
  save("obama.png")
}

function draw() {
  const randomX = random(0, width);
  const randomY = random(0, height);
  
  const c = img.get(randomX, randomY);
  const b = brightness(c);
  const d = map(b, 0, 100, 8, 24); 
  
  noStroke();
  fill(c);
  circle(randomX, randomY, d);
}
