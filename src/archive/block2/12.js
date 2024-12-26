function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  }
  
  function draw() {
    background('#FFF');
    
    for (let i = 0; i < 5; i++) {
      const y = random(0, height);
      
      fill('#000');
        line(0, y, width, y)
    }
  }