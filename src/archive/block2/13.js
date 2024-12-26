function setup() {
    createCanvas(2000, 2000);
    noLoop();
  }
  
  function draw() {
    background('#FFF');
    stroke('#000');
    
    for(let i = 0; i < 1000; i += 10) {
      line(0, i, width, i);
    }
     
    for(let i = 1000; i < 2000; i += 10) {
      line(0, i, width, i);
    }
  }