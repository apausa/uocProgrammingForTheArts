/* Mi objetivo es generar un patrón geométrico que replique el movimiento de una llama y su humo 
 * para el 'packaging' de una vela aromática (cuadrado). He utilizado la función 'arc', para 
 * representar cada una de las figuras del patrón mediante un cuarto de círculo. A veces con su 
 * centro en la esquina superior izquierda de cada casilla, y otras con su centro en la esquina
 * opuesta (inferior derecha). Esta contraposición confiere un efecto de movimiento diagonal 
 * ondulado al 'canvas'. 

 * Además, he utilizado la función 'square' para representar el fondo de cada casilla. Aunque a 
 * veces también se utiliza como figura para romper la composición y transmitir una sensación de 
 * dinamismo al 'output'.

 * Técnicamente, he usado un bucle anidado para generar el patrón geométrico. Dentro de este 
 * bucle, he usado la función 'random', para asignar un tipo de forma diferente a cada casilla, y la 
 * estructura condicional del 'switch', para renderizar cada una de estas formas según su tipo. 

 * El color de la figura nunca coincide con el de su fondo, esto se logra llamando al msimo método 
 * de manera recursiva ('this.returnDifferentColorThan(previousColor)') hasta que ambos tonos de la 
 * paleta difieren. He empleado una paleta en escala de grises, en referencia al humo y al packaging 
 * de las velas aromáticas. También he empleado el PANTONE BLUE 072 C (#10069F), en referencia 
 * al color de las llamas. 
 */

let pattern = null;

function setup() {
  createCanvas(512, 512);
  noLoop(); // (Función 'noLoop').
  
  const grid = width / 8;
  let palette = ['#FFF', '#AAA', '#555', '#10069F'];

  pattern = new Pattern(grid, palette);
}

function mousePressed(){
  save("candle.png")
}

function draw() {
  noStroke(0);

  pattern.draw();
}

class Pattern { 
  constructor(grid, palette) { 
    this.grid = grid; // Número de casillas por ancho y largo, (variable 1).
    this.palette = palette; // Paleta de colores, (variable 2).
    this.metadata =  []; // Tipo de forma asignada a cada casilla, (variable 3).
    this.radius = this.grid * 2; // Variable 4. Radio de cada arco, (variable 4).
  }

  renderRightArc(x, y, backgroundColor) { // (Método 5)
    // Recupera el color de la figura
    const figureColor = this.returnDifferentColorThan(backgroundColor);

    // Dibuja un arco con su centro en la esquina inferior derecha de la casilla.
    fill(`${figureColor}`); 
    arc(x + this.grid, y + this.grid, this.radius, this.radius, PI, HALF_PI + PI);
  }

  renderLeftArc(x, y, backgroundColor) { // (Método 4).
    // Recupera el color de la figura
    const figureColor = this.returnDifferentColorThan(backgroundColor);
        
    // Dibuja un arco con su centro en la esquina superior izquierda de la casilla.
    fill(`${figureColor}`); 
    arc(x, y, this.radius, this.radius, 0, HALF_PI);
  }

  returnDifferentColorThan(previousColor) { // (Método 3).
    // Recupera un color de la paleta
    const randomIndex = round(random(0, this.palette.length - 1));
    const currentColor = this.palette[randomIndex];
    
    // Se llama a sí mismo cuando el color coincide con el valor parametrizado.
    return (previousColor === currentColor)
      ? this.returnDifferentColorThan(previousColor) 
      : currentColor;
  }

  renderBackgroundReturnColor(x, y) { // (Método 2).
    // Recupera el color del fondo. 
    const backgroundColor = this.returnDifferentColorThan(null);

    fill(`${backgroundColor}`);
    square(x, y, this.grid);

    // Retorna el color del fondo
    return backgroundColor; 
  }

  draw() {
    for (let i = 0; i < this.grid; i++) { // (Método 1, bucles anidados).
      this.metadata[i] = [];

      for (let j = 0; j < this.grid; j++) {
        const [x, y] = [i * this.grid, j * this.grid];
        const backgroundColor = this.renderBackgroundReturnColor(x, y);
        
        // Asigna un tipo de figura a la casilla, (función random).
        this.metadata[i][j] = round(random(0, 2));
        // Dibuja la figura según su tipo asignado, (estructura condicional).
        switch (this.metadata[i][j]) {
          case 0: this.renderLeftArc(x, y, backgroundColor); break;
          case 1: this.renderRightArc(x, y, backgroundColor); break;
          default: break;
        }
      }
    }
  }
}