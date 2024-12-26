function setup() {
    createCanvas(1024, 768);
    noLoop();
  }
  
  function draw() {
    const module = width / 7;
    const [y, d] = [height / 2, 20];
    
    background(0);
    noStroke();
    
    // pacman 
    fill('#FF0')
    arc(
      module * 2, y,
      80, 80,
      QUARTER_PI, -QUARTER_PI
    );
    
    // food
    fill('#FFF')
    circle(module * 3, y, d);
    circle(module * 4, y, d);
    circle(module * 5, y, d);
  }
  