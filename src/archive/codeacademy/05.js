function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let x = 256; x > 0; x -= 8) {
      let y = x;
      rotate(radians(frameCount / 16));
      rect(0, 0, x, y);
  }
}