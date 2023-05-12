function setup() {
    createCanvas(100, 100);
    background('#444');
    stroke('#FFF');
  }
  
  function draw() {
    // Line
    strokeWeight(2);
    line(10, 10, 30, 10);
    
    // Point
    strokeWeight(4)
    point(80, 20);
    
    // Arc
    strokeWeight(1);
    fill('#ff5470');
    arc(20, 20, 20, 20, 0, PI);
    
    // Ellipse
    strokeWeight(2);
    fill('#00214d');
    ellipse(50, 20, 20);
    
    // Quad
    strokeWeight(4);
    fill('#fde24f');
    quad(10, 90, 50, 80, 50, 50, 20, 60);
    
    // Rect
    strokeWeight(2);
    fill('#00ebc7');
    rect(70, 40, 20, 20);
    
    // Triangle
    noFill();
    strokeWeight(1);
    triangle(80, 70, 70, 90, 90, 90);
  }