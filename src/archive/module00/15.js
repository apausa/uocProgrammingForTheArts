function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    const [w, h, s] = [60, 90, width];
    const transparency = 0.2;
    
    background("#d69a03");
    noStroke();
    
    for (let i = 1; i < 4; i++) {
      fill(`rgba(255, 0, 0, ${transparency * i})`);
      square(w * i, h * i, s - (120 * i));
    }
  }
  