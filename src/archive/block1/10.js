function setup() {
    createCanvas(485, 195);
  }
  
  function piece1() {
    stroke('rgba(255, 255, 0, 1)');
    fill('rgba(255, 255, 0, 0.5)');
    square(0, 155, 40);
    square(40, 155, 40);
    square(0, 115, 40);
    square(40, 115, 40);
  }
  
  function piece2() {
   stroke('rgba(0, 0, 255, 1)');
   fill('rgba(0, 0, 255, 0.5)');
   square(80, 155, 40);
   square(120, 155, 40);
   square(80, 115, 40);
   square(80, 75, 40);
  }
  
  function piece3() {
   stroke('rgba(255, 0, 0, 1)');
   fill('rgba(255, 0, 0, 0.5)');
   square(160, 155, 40);
   square(160, 115, 40);
   square(160, 75, 40);
   square(160, 35, 40);
  }
  
  function piece4() {
   stroke('rgba(0, 255, 0, 1)');
   fill('rgba(0, 255, 0, 0.5)');
   square(240, 155, 40);
   square(240, 115, 40);
   square(200, 115, 40);
   square(200, 75, 40);
  }
  
  function piece5() {
    stroke('rgba(255, 0, 255, 1)');
    fill('rgba(255, 0, 255, 0.5)');
    square(280, 155, 40);
    square(320, 155, 40);
    square(320, 115, 40);
    square(360, 155, 40);
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