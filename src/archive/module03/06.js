function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    const s = map(mouseY, 0, height, 0, 200); 
    
    background('#000'); 
    
    for (let i = 0; i < 12; i += 3) {
      (i === 0) ? fill('#FFF'): noFill();
      
      stroke('#FFF');
      textSize(s);
      textFont('Times New Roman');
      textAlign(CENTER, CENTER);
      text('pablo', width / 2 + i, height / 2);
    }
  }