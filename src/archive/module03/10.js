let pos = 1;
  
function setup() {
  createCanvas(400, 400);
  frameRate(8);
}

function draw() {
  const greeting = "Hola!";
  const letters = greeting.substring(0, pos);
  pos += 1;
  
  background('#000');

  fill("#FFF");
  textFont('Courier')
  textSize(width / 4);
  textAlign(CENTER, CENTER);
  text(letters, width / 2, height / 2);
  
  if (pos === greeting.length + 1)
    pos = 1;
}
