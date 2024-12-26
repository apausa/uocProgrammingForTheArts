function generate(tr) {
    const {x1, y1, x2, y2, x3, y3} = tr; 
    
    translate(random(width - 500), random(height - 500));
    triangle(x1, y1, x2, y2, x3, y3);
    resetMatrix();
  }
  
  function bigTriangles() {
    const tr1 = {x1: 0, y1: 350, x2: 160, y2: 40, x3: 320, y3: 350}; 
    const tr2 = {x1: 0, y1: 350, x2: 160, y2: 610, x3: 320, y3: 350}; 
    const tr3 = {x1: 160, y1: 40, x2: 0, y2: 350, x3: 320, y3: 350}; 
    
    noStroke();
    fill("rgba(220, 197, 193, 0.5)");
    generate(tr1);
    generate(tr2);
   
    stroke("rgba(220, 197, 193, 0.5)");
    noFill();
    generate(tr3);
  }
  
  function smallTriangles() {
    const tr = {x1: 0, y1: 87.2, x2: 40, y2: 10, x3: 80, y3: 87.2}; 
    
    noStroke();
    fill('rgba(0,0,0, 0.7)');
    generate(tr);
    generate(tr);
  }
  
  function mediumTriangles() {
    const tr = {x1: 0, y1: 175, x2: 80, y2: 20, x3: 160, y3: 175}; 
    
    noStroke();
    fill("rgba(220, 197, 193, 0.5)");
    generate(tr)
    fill('rgba(0,0,0, 0.3)');
    generate(tr)
    
    stroke("rgba(220, 197, 193, 0.5)");
    noFill();
    generate(tr)
  }
  
  function setup() {
    createCanvas(1024, 768);
    background(245);
    
    mediumTriangles();
    smallTriangles();
    bigTriangles();
  }