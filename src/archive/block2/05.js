function setup() {
    createCanvas(800, 600);
    noLoop();
}

function drawFloor() {
    fill('#eabf59');
    rect(50, height - 20, width, height);
}

function drawTreeTop() {
    const [x1, y1] = [480, 380];
  	const [x2, y2] = [378, 20];
  	const [x3, y3] = [286, 380];
  	const y4 = y1 + 100;
  	const y5 = y2 + 100;
  	const y6 = y3 + 100;
  
    fill('#4dc6ac');
    triangle(x1, y1, x2, y2, x3, y3); 
    triangle(x1 - 200, y4, x2 - 200, y5, x3 - 200, y6);
    triangle(x1 + 200, y4, x2 + 200, y5, x3 + 200, y6);

    fill('#1ea284');
    triangle(x1 - 100, y1, x2, y2,x3, y3);
    triangle(x1 - 300, y4, x2 - 200, y5, x3 - 200, y6);
    triangle(x1 + 100, y4, x2 + 200, y5, x3 + 200, y6);
}

function drawTreeBottom() {
  const [x, y1, w, h1] = [360, 380, 20, 200];
  const [y2, h2] = [y1 + 100, h1 - 100] 

  fill('#c69c6b');
  rect(x, y1, w, h1);
  rect(x - 180, y2, w, h2);
  rect(x + 220, y2, w, h2);
  
  fill('#736356');
  rect(x + 20, y1, w, h1);
  rect(x - 200, y2, w, h2);
  rect(x + 200, y2, w, h2);
}

function draw() {
  background(255);
  noStroke();
  
  drawFloor();
  drawTreeBottom();
  drawTreeTop(); 
}