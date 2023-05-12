/* Reinterpretacion de 'La Inmaculada Concepcion' (1618), por Diego Velázquez.
 * Esta obra se encuentra en la coleccion permanente de la National Gallery de Londres.
 * Y pertenece al periodo barroco espanol. 
 * 
 * La obra se ha representado en un formato de 4:3 (600x800 pixeles), utilizando:
 *  - 'arc()', para representar las nubes del fondo;
 *  - 'circle()', para simbolizar el planeta, la corona de estrellas, la cara, y la parte superior del vestido;
 *  - 'vertex()', para dibujar la capa y la parte inferior del vestido;
 *  - 'triangle()', para renderizar un detalle del vestido y la mano derecha;
 *  - y 'line()', para mostrar el resto de detalles del vestido. 
 * 
 * Los tres colores empleados (en HSB), son
 *  - el rosa (350, 25, 100),
 *  - el azul marino (240, 100, 50), 
 *  - y el negro (0, 0, 0), con diferentes transparencias para lograr:
 *    - el gris (0, 0, 50), con un 50% de transparencia;
 *    - y el blanco (0, 0, 100), con un 100%, respectivamente. 
 */

function setup() {
    createCanvas(600, 800); // 4:3 format
  }
  
  function drawWhiteBackground(circles, grid) {
    const { circleLarge, circleMedium } = circles;
    const { halfWidth } = grid;
    const eightPi = QUARTER_PI / 2;
  
    background(0, 0, 50); // Black, 50% transparency (gray)
  
    // Cloud
    fill(0, 0, 100); // Black, 100% transparency (white)
    stroke(0, 0, 50); // Black, 50% transparency (gray)
    arc(halfWidth, height / 2, width, width, -eightPi, PI + eightPi, OPEN);
  
    // Crown
    noFill(); 
    stroke(0, 0, 100); // Black, 100% transparancy (white)
    circle(halfWidth, circleMedium, circleLarge);
  }
  
  function drawBlueBackground(circles, grid) {
    const {circleLarge, circleMedium, circleSmall, circleExtraSmall, circleExtraLarge} = circles;
    const {column1Left, column1Right, column2Right, halfWidth} = grid;
  
    fill(240, 100, 50); // Navy blue
    noStroke();
  
    // Earth
    circle(halfWidth, height, circleExtraLarge);
  
    // Cape
    beginShape();
      vertex(column1Right, circleMedium);
      vertex(column1Left, circleMedium);
      vertex(75, width);
      vertex(column2Right, width);
      vertex((circleLarge * 3) + (circleExtraSmall), circleLarge * 2 + circleSmall);
    endShape(CLOSE);
    circle(halfWidth, circleMedium, circleMedium);
  }
  
  function drawDress(circles, grid) {
    const { circleSmall, circleExtraLarge } = circles;
    const { column1Right, column2Right, halfWidth } = grid;
    const navelHeight = circleExtraLarge + (circleExtraLarge / 2);
    const footHeight = height - circleSmall;
  
    fill(350, 25, 100); // Pink
    stroke(240, 100, 50); // Navy blue
    beginShape();
      vertex(column1Right, circleExtraLarge);
      vertex(circleExtraLarge, circleExtraLarge);
      vertex(circleExtraLarge, footHeight);
      vertex(column2Right, footHeight);
      vertex(column2Right, width);
      vertex(column1Right, navelHeight);
    endShape(CLOSE);
    circle(halfWidth, circleExtraLarge, circleExtraLarge);
  }
  
  function drawDetails(circles, grid) {
    const { circleSmall, circleMedium, circleExtraLarge } = circles;
    const { column1Right, column1Left, halfWidth } = grid;
    const navelHeight = circleExtraLarge + (circleExtraLarge / 2);
    const chestHeight = circleExtraLarge - (circleExtraLarge / 4);
  
    stroke(240, 100, 50); // Navy blue
    line(column1Left, circleExtraLarge, halfWidth, circleExtraLarge);
    line(column1Left, circleExtraLarge, column1Left, chestHeight);
    line(halfWidth, circleExtraLarge, halfWidth, navelHeight);
    line(column1Right, chestHeight, column1Right, height);
  
    fill(240, 100, 50); // Navy blue
    triangle(
      column1Right,
      circleExtraLarge,
      column1Right,
      navelHeight,
      column1Right + circleMedium,
      navelHeight
    );
  
    noFill();
    circle(halfWidth, circleMedium + circleSmall, circleMedium);
  }
  
  function drawBody(circles, grid) {
    const {circleMedium, circleExtraSmall, circleExtraLarge} = circles;
    const { column1Right, halfWidth } = grid;
    const handHeight = circleExtraLarge + (circleExtraLarge / 4);
  
    fill(0, 0, 100); // White, 100% transparency
    stroke(240, 100, 50); // Navy blue
  
    // Hand
    triangle(
      halfWidth,
      handHeight,
      column1Right,
      circleExtraLarge,
      halfWidth,
      circleExtraLarge
    );
  
    // Face
    circle(halfWidth, circleMedium + circleExtraSmall, circleMedium);
  }
  
  function draw() {
    // Circles
    const circleLarge = width / 4;
    const circleMedium = circleLarge / 2;
    const circleSmall = circleMedium / 2;
    const circleExtraSmall = circleSmall / 2;
    const circleExtraLarge = (width - circleLarge) / 2;
    const circles = {
      circleLarge,
      circleMedium,
      circleSmall,
      circleExtraSmall,
      circleExtraLarge,
    };
  
    // Grid
    const halfWidth = width / 2;
    const column1Left = halfWidth - circleSmall;
    const column1Right = halfWidth + circleSmall;
    const column2Right = halfWidth + circleMedium;
    const grid = {
      halfWidth,
      column1Left,
      column1Right,
      column2Right,
    };
  
    colorMode(HSB);
    rectMode(CENTER);
   
    drawWhiteBackground(circles, grid);
    drawBlueBackground(circles, grid);
    drawDress(circles, grid);
    drawDetails(circles, grid);
    drawBody(circles, grid);
  }