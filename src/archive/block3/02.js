function setup() {
    createCanvas(windowWidth, windowHeight);
    background('rgba(0, 0, 0, 0.5)');
    /* Cuando background se llama desde draw sin  
     * transparencia, este se dibuja varias veces
     * por segundo 'reseteando' lo anterior.
     * Mientras que cuando se llama con transparencia,
     * las capas anteriores son visibles por lo que 
     * el rastro de la línea es mayor.
     *
     * Cuando background se llama desde setup, este se
     * dibuja una única vez, por lo que queda visible
     * el rastro completo de la línea en draw.
     */ 
  }
  
  function draw() {
    const d = dist(mouseX, mouseY, pmouseX, pmouseY);
    
    strokeWeight(d); 
    line(mouseX, mouseY, pmouseX, pmouseY);
  }