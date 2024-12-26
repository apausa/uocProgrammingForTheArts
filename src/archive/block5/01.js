function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#184158");
    noStroke();
    noLoop();
  }
  
  function draw() {
    for (let i = 0; i < 5; i++) {
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);
      const c = {r, g, b};
      
      const x = random(0, width);
      const y = random(0, height);
      const d = random(10, 100);
      const cir = {x, y, d}
      
      dibujarElipse(c, cir);
    }
  }
  
  function dibujarElipse(c, cir) {
    const {r, g, b} = c; 
    const {x, y, d} = cir; 
    
    fill(r, g, b);
    circle(x, y, d);
  }
  