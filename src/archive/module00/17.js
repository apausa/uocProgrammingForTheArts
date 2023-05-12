function setup() {
    createCanvas(1024, 768);
  }
  
  function draw() {
    const [x2, x3, x4] = [10, 60, 110];
    const y2 = y4 = 400; 
    
    background(255);
  
    noFill();
    stroke(40);
    strokeCap(ROUND); 
    strokeJoin(ROUND); 
    strokeWeight(15);
        
    beginShape(); // Begin
    vertex(10, 400);
    
    for (let i = 0; i < 10; i++) {
      const module = 100 * i;
      const y3 = (i % 2) ? 470 : 330;
      
      bezierVertex(x2 + module, y2, x3 + module, y3, x4 + module, y4)
    }
    endShape(); // End
  }