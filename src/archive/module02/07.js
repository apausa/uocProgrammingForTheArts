let shape = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
  
  	const [x, y, w] = [width/2, height/2, 300];
  	shape = new Shape(x, y, w);
}

function mouseMoved() {
  shape.changeCursor(mouseX, mouseY);
}


function draw() {
  	background("white");
  	shape.generateEllipse();
  
  	if (mouseIsPressed)
      shape.changeShape(mouseX, mouseY)
}
