function setup() {
    createCanvas(500, 500);
}


function draw() {
    const d = 50;
  
  	const [start1, stop1] = [d + (d / 2), 400 + (d / 2)];
  	const [start2, stop2] = [d + (d / 2), 400 + (d / 2)]
    const xMap = map(mouseX, start1, stop1, start2, stop2, true);
    const yMap = map(mouseY, start1, stop1, start2, stop2, true);

  	background("gray");
  
  	stroke(0);
    noFill();
    rect(d, d, 400, 400);
  
    noStroke();
    fill("black");
    ellipse(xMap, yMap, d);
}