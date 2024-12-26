function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  }
  
  function draw() {
    const paragraph = "This is big and this small";
    const words = paragraph.split(' '); 
    const widths = [0]; // initial position
    
    background("white");
    fill(50);
    textLeading(25);	
    
    words.forEach((word, i) => {
      if (word === 'big') textSize(160)
      else if (word === 'small') textSize(10)
      else textSize(40);
      
      const w = textWidth(word);
      const x = widths.reduce(
        (acc, val) => acc + val, 0);
    
      text(word,x, height / 2);
      widths.push(w);
    })
  }