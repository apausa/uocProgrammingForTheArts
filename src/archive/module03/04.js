let img = null;

function preload(){
  const url = "https://codelab.uoc.edu/filemanager/source_repo/acalosci/Obama_482.jpg"

  img = loadImage(url);
}

function setup() {
  createCanvas(482, 482);
  background(255);
}

function draw() {
  const pixels = 32;
  const grid = width / pixels;

  img.resize(pixels, pixels);

  for(let i = 0; i < pixels; i++){
    for(let j = 0; j < pixels; j++){
      const b = brightness(img.get(i, j));
      const d = map(b, 0, 100, grid, 0);
      
      fill(b);
      circle(grid * i, grid * j, d)
    }
  }
}
