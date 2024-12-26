function setup() {
    createCanvas(100, 100);
  }
  
  function p() {
    fill('rgba(0, 0, 255, 0.6)');
    quad(5, 35, 10, 35, 10, 70, 5, 70);
    arc(10, 45, 20, 20, PI + HALF_PI, HALF_PI);
  }
  
  function a() {
   fill('rgba(0, 0, 255, 0.8)');
   triangle(20, 70, 35, 70, 27.5, 35);
  }
  
  function b() {
   fill('rgba(0, 0, 255, 1)');
   quad(40, 35, 45, 35, 45, 70, 40, 70);
   quad(50, 35, 55, 35, 55, 70, 50, 70);
   quad(45, 35, 50, 35, 50, 40, 45, 40);
   quad(45, 50, 50, 50, 50, 55, 45, 55);
   quad(45, 65, 50, 65, 50, 70, 45, 70);
  }
  
  function l() {
   fill('rgba(0, 0, 255, 0.8)');
   quad(60, 35, 65, 35, 65, 70, 60, 70);
   quad(65, 65, 75, 65, 75, 70, 65, 70);
  }
  
  function o() {
    fill('rgba(0, 0, 255, 0.6)');
    ellipse(87.5, 52.5, 15, 35);
  }
  
  function draw() {
    background('#FFF');
    noStroke();
    
    p();
    a();
    b();
    l();
    o();
  }