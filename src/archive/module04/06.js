function setup() {
    createCanvas(1024, 768);
    noLoop();
    background(50);
  }
  
  function draw() {
    const sizes = [100, 200, 300];
  
    noFill();
    stroke("black");
    circle(200, height / 2, sizes[0]);
    noStroke();
    fill("#90edb9");
    circle(450, height / 2, sizes[1]);
    fill(240);
    circle(800, height / 2, sizes[2]);
  }
  