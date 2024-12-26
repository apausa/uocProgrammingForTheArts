function setup() {
    createCanvas(windowWidth, windowHeight);
    background('rgba(0, 0, 0, 0.5)');
  }
  
  function draw() {
    const d = dist(mouseX, mouseY, pmouseX, pmouseY);
    
    strokeWeight(d); 
    stroke((mouseY < windowHeight / 2) ? '#FF0' : '#000');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }