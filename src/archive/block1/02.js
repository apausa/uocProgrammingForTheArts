function setup() {
    createCanvas(400, 350);
    frameRate(2);
    noStroke();
    fill('white');
  }
  
  function draw() {
    /* La función 'frameRate' especifica que 
     * 'draw' se ejecute dos veces por segundo.
    */
    background(50, 50, 50, 25.5);
    
    /* El triángulo nunca cambia de color
     * porque se dibuja después que el 'background'.
    */
    triangle(200, 50, 350, 300, 50, 300);
  }
  
  