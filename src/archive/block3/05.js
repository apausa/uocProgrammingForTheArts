function setup() {
    createCanvas(1024, 768);
}


function draw() {
  	const d = map(mouseX, 0, width, 10, 50, true);
  
    background("#FFF");
    noStroke();
  	fill((mouseIsPressed) ? '#FF0' : '#000');
    ellipse(mouseX, mouseY, d);
}
