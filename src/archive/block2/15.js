function setup() {
    createCanvas(1000, 1000);
    noLoop();
  }
  
  function draw() {
    background('#FFF');
    
    for(let i = 0; i < 1000; i += 10) {
      line(0, i, width, i) // horizontal
      for(let j = 0; j < 1000; j += 100) {
          line(j, 0, j, height) // vertical 
      }
    }
  }