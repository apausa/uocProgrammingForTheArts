// Las variables gobales son una mala práctica.
// No he usado ninguna en este ejercicio.

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#184158");
    noLoop();
  }
  
  function draw() {
    for (let i = 0; i < 5; i++) {
      dibujarElipse();
    }
  }
  
  function dibujarElipse() {
    const x = random(0, width);
    const y = random(0, height);
    
    noStroke();
    fill(225, 103, 110);
    circle(x, y, 100);
  }
  