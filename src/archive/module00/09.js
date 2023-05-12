function setup() {
    createCanvas(650, 650);
  }
  
  function draw() {
    background('#FFF2D1');
    
    // Formas sin contorno
    noStroke();
  
    // Arco rosa
    fill('#FFBEB3');
    arc(300, 300, 500, 500, PI, HALF_PI + PI);
  
    // Cuadrado rojo
    fill('#FF6F5C');
    square(50, 350, 250);
    
    // Triángulo azul
    fill('#92DCE5');
    triangle(350, 600, 350, 350, 600, 600);
  
    // Formas con contorno
    strokeWeight(25);
    noFill();
    
    // Círculo amarillo
    stroke('#FFCC66');
    circle(485, 175, 225);
  
    // Línea negra. Ajustar.
    stroke('#2B303A');
    strokeCap(PROJECT);
    line(550, 375, 600, 375);
    line(575, 400, 575, 350);
  }
  