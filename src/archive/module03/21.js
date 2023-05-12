function setup() {
    createCanvas(500, 240);
    colorMode(HSB, 100); 
    noLoop();
  }
  
  function draw() {
    const generate = (i) => round(random(0, i))
    const half = width / 2;
    
    background('#FFF');
    strokeCap(SQUARE);
    strokeWeight(3);
  
    for (i = 20; i < height; i = i + 20) {
      let h1 = map(sin(generate(i)), -1, 1, 0, 100); 
      let h2 = map(cos(generate(i)), -1, 1, 0, 100); 
      let s1 = map(sin(generate(i)), -1, 1, 0, 100); 
      let s2 = map(cos(generate(i)), -1, 1, 0, 100); 
      let b1 = map(sin(generate(i)), -1, 1, 0, 100); 
      let b2 = map(cos(generate(i)), -1, 1, 0, 100); 
      
      stroke(h1, s1, b1);
      line(0, i, half - 3, i);
    
      stroke(h2, s2, b2);
      line(half + 3, i, width, i);
    }
  }
  