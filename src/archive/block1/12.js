function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
  }
  
  function draw() {
    background(204);
    noStroke();
    fill('#000')
  
    ellipse(264, 202, 45, 45);  // Head
    rect(254, 237, 20, 20); // Neck
    rect(219, 257, 90, 120); // Main body
    rect(219, 377, 20, 120); // Left leg
    rect(289, 377, 20, 120); // Right leg
    fill('#FFF'); // Set fill to white             
    ellipse(284, 202, 4, 4); // Small eye 1
    ellipse(244, 202, 4, 4); // Small eye 2
  }