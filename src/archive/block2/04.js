function setup() {
    createCanvas(800, 600);
 	ellipseMode(CENTER);
  	noLoop();
}

function drawFloor() {
  	const [x, y] = [50, height - 20];
    const [s, m, l, xl] = [10, 20, 30, 40];
  
    fill('#eabf59');
    arc(x, y, l, l, PI, 0); 
    arc(x + xl, y, xl, xl, PI, 0);
    arc(x + 80, y, m, m, PI, 0);
    arc(x + 150, y, l, l, PI, 0);
    arc(x + 190, y, xl, xl, PI, 0);
    arc(x + 230, y, m, m, PI, 0);
    arc(x + 270, y, s, s, PI, 0);
    arc(x + 390, y, m, m, PI, 0);
    arc(x + 430, y, xl, xl, PI, 0);
    arc(x + 470, y, s, s, PI, 0);
    arc(x + 490, y, m, m, PI, 0);
    arc(x + 560, y, xl, xl, PI, 0);
    arc(x + 590, y, s, s, PI, 0);
    arc(x + 650, y, m, m, PI, 0);
}

function drawTree() {
    fill("#c69c6b");
    rect(360, 380, 20, 200);
    fill("#736356");
    rect(380, 380, 20, 200);
  
    fill("#4dc6ac");
    circle(380, 350, 300);
    fill("#1ea284");
    circle(380, 350, 200);
    fill("#1c9076");
    circle(380, 350, 100);
}

function draw() {
    background('#FFF');
    noStroke();
  	drawFloor();
  	drawTree();
}
