function setup() {
    createCanvas(1024, 768);
  }
  
  function draw() {
    background(255);
    noFill();
    strokeCap(ROUND); //Redondea el final de un vértice
    strokeJoin(ROUND); //Redondea la unión de 2 vértices
    strokeWeight(30);
    beginShape(); 
    vertex(500, 30); // arriba
    vertex(600, 230);
    vertex(800, 330); // arriba derecha
    vertex(625, 430);
    vertex(700, 630); // abajo derecha
    vertex(500, 530);
    vertex(300, 630); // abajo izquierda
    vertex(375, 430);
    vertex(200, 330); // arriba izquierda
    vertex(400, 230);
    endShape(CLOSE); 
  }