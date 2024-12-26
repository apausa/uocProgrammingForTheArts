function setup() {
    createCanvas(485, 195);
    noLoop();
  }
  
  function generate(x, y) {
    const module = 40;
    
    for (let i = 0; i < 4; i++) {
      square(x[i] * module, y[i], module);
    }
  }
  
  function piece1() {
    const yellow = '255, 255, 0';
    const x = [0, 1, 0, 1];
    const y = [155, 155, 115, 115];
    
    stroke(`rgba(${yellow}, 1)`);
    fill(`rgba(${yellow}, 0.5)`);
    generate(x, y);
  }
  
  function piece2() {
   const blue = '0, 0, 255';
   const x = [2, 3, 2, 2];
   const y = [155, 155, 115, 75];
    
   stroke(`rgba(${blue}, 1)`);
   fill(`rgba(${blue}, 0.5)`);
   generate(x, y);
  }
  
  function piece3() {
   const red = '255, 0, 0';
   const x = [4, 4, 4, 4];
   const y = [155, 115, 75, 35];
    
   stroke(`rgba(${red}, 1)`);
   fill(`rgba(${red}, 0.5)`);
   generate(x, y);
  }
  
  function piece4() {
   const green = '0, 255, 0';
   const x = [6, 6, 5, 5];
   const y = [155, 115, 115, 75];
    
   stroke(`rgba(${green}, 1)`);
   fill(`rgba(${green}, 0.5)`);
   generate(x, y);
  }
  
  function piece5() {
    const magenta = '255, 0, 255';
    const x = [7, 8, 8, 9];
    const y = [155, 155, 115, 155];
    
    stroke(`rgba(${magenta}, 1)`);
    fill(`rgba(${magenta}, 0.5)`);
    generate(x, y);
  }
  
  function draw() {
    background(0);
    strokeWeight(2);
    
    piece1();
    piece2();
    piece3();
    piece4();
    piece5();
  }