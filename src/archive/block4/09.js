let currentPos = 0; // global variable

function setup() {
  createCanvas(500, 500);
  frameRate(8);
}

function draw() {
  const name = "pablo";
  const nextPos = currentPos + 1
  const letter = name.substring(currentPos, nextPos);
  currentPos = nextPos;

  background('#000');
  fill("#FFF");
  textFont('Times New Roman')
  textSize(width / 4);
  textAlign(CENTER, CENTER);
  text(letter, width / 2, height / 2);
  
  if (currentPos === name.length)
    currentPos = 0;
}