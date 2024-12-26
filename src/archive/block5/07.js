function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  textAlign(CENTER);
}

function draw() {
  const paragraph = "Imagine there's no heaven | It's easy if you try | No hell below us | Above us only sky | Imagine all the people | Living for today | Imagine there's no countries | It isn't hard to do | Nothing to kill or die for | And no religion too | Imagine all the people | Living life in peace";
  const words = paragraph.split(' '); 
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  background("white");
  fill(50);
  textSize(20);
  textLeading(25);

  // a) Escribimos la primera posición del array
  // text(words[0], halfWidth, halfHeight)
  // b) Escribimos la octava palabra
  // text(words[8], halfWidth, halfHeight);
  // c) Escribimos la última posición del array
  // text(words[words.length - 1], halfWidth, halfHeight);
  // d) Escribimos las veces que aparece la palabra "Imagine"
  const times = words.filter(word => word === words[0]);
  
  text(`${times.length} veces`, halfWidth, halfHeight);
}