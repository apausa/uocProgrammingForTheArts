function setup() {
    createCanvas(1024, 768);
    background(0);
  }
  
  function draw() {
    noStroke();
    
    fill('#FF0')
    arc(288, 384, 80, 80, QUARTER_PI, -QUARTER_PI);
    
    fill('#FFF')
    ellipse(384, 384, 20);
    ellipse(480, 384, 20);
    ellipse(576, 384, 20);
  }
  
  