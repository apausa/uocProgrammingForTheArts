function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background('#000'); 
    
    for (let i = 0; i < 12; i += 3) {
      (i === 0) ? fill('#FFF'): noFill();
      
      stroke('#FFF');
      textSize(200);
      textFont('Times New Roman');
      textAlign(CENTER, CENTER);
      text('pablo', width / 2 + i, height / 2);
    }
  }