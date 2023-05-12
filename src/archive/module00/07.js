function setup() {
    createCanvas(500, 500)
  }
  
  function draw() {
    background("#EE5B5B");
    
    // Cara
    fill(255);
    strokeWeight(8);
    stroke("#57C4B9");
    ellipse(250,250,250,250);
    
    // Ojos
    fill("#57C4B9");
    ellipse(200,220,20,20);
    ellipse(295,220,20,20);
    
    // Boca feliz
    noFill();
    arc(245, 280, 100, 80, 0, PI);
  }