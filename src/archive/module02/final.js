/* He desarrollado un autoretrato en estilo pop. Concretamente, tomando como referencia los retratos 
 * del artista británico Julian Opie. La delineación de sus siluetas se inspira en grabados de madera
 * japoneses, jeroglíficos egipcios y señales de tráfico (Moco Museum, 2023). Así que he usado
 * colores planos y bordes marcados para ello. El tamaño del canvas es de 800x800 píxeles. 
 * 
 * Requerimientos:
 * — Interacción mediante el teclado: la figura cierra los ojos cuando se pulsa la barra espaciadora. 
 * — Interacción mediante el ratón: la figura sigue la posición del ratón con los ojos. 
 * — Interacción mediante el primer slider: que controla el grosor del trazo (desde 1 hasta 8). 
 * — Función 'dist()': cuanta mayor sea la distancia entre la posición actual del ratón y la anterior, 
 *   menor será el tamaño de las pupilas. Este es un detalle sutil que marca una gran diferencia. 
 * — Función 'map()': para lograr cualquier interacción con el ratón. 
 * 
 * Extra: 
 * — Interacción mediante el segundo slider: que controla el número módulos en la retícula (desde 8
 *   hasta 32). Lo que repercute en el tamaño de todas las formas del autoretrato. 
 * — Función 'cursor()': el puntero es una cruz cuando pasa por el canvas. 
 * 
 * Bibliografía: 
 * — Moco Museum. (2023). Julian Opie. Recuperado de https://mocomuseum.com/artists/julian-opie/16954
*/

let sliderOutline = null;
let sliderGrid = null;

function setup() {
  createCanvas(800, 800);
  cursor(CROSS); 

  const module = width / 16;

  // slider interactions
  sliderOutline = createSlider(1, 8, 4); // stroke weight ranges from 1 to 8
  sliderGrid = createSlider(8, 32, 16); // grid size ranges from 8 to 32
  sliderOutline.position(module, module);
  sliderGrid.position(module, module * 2);
  sliderOutline.style('width', `${module * 4}px`);
  sliderGrid.style('width', `${module * 4}px`);
}

function draw() {
  const SPACE_BAR = 32; 
  const palette = {
    NAVY: 'navy', 
    BLACK: 'black',
    WHITE: 'white'
  }

  const outline = sliderOutline.value();
  const grid = sliderGrid.value();
  const module = width / grid;
  const earW = earH = module * 2;
  
  strokeWeight(outline);

  // draws background
  background(palette.NAVY);
  bothFillAndOutline(palette.BLACK, palette.WHITE);
  square(0, 0, module * 16);

  // draws figure
  hair(module, palette.WHITE);
  neck(module, palette.NAVY, palette.WHITE);
  forehead(module, palette.NAVY, palette.WHITE);
  jaw(module, palette.NAVY, palette.WHITE);
  leftEar(module, earW, palette);
  rightEar(module, earW, palette);
  face(module, palette.NAVY, palette.WHITE);
  keyIsDown(SPACE_BAR) // keyboard interaction
    ? closedEyes(module, palette.WHITE)
    : openedEyes(module, palette.NAVY, palette.WHITE);
  details(module, palette.WHITE);
}

// color functions

function onlyFill(fillColor) {
  fill(fillColor);
  noStroke();
}

function onlyOutline(outlineColor) {
  noFill();
  stroke(outlineColor);
}

function bothFillAndOutline(fillColor, outlineColor) {
  fill(fillColor);
  stroke(outlineColor);
}

// draw functions 

function hair(module, outlineColor) {
  const [hairW, hairH] = [module * 8, module * 4];

  onlyFill(outlineColor)
  triangle( // hair, left side
    module * 4, module * 6,
    module * 5, module * 4,
    module * 4, module * 4);
  triangle( // hair, right side
    module * 11, module * 4,
    module * 12, module * 6,
    module * 12, module * 4);
  
  bothFillAndOutline(outlineColor, outlineColor)
  arc(module * 8, module * 4, hairW, hairH, PI + HALF_PI, 0); // hair, left side
  line(module * 4, module * 6, module * 4, module * 4); // hair, left side
  arc(module * 8, module * 4, hairW, hairH, PI, PI + HALF_PI); // hair, right side
  line(module * 12, module * 6, module * 12, module * 4); // hair, right side
}

function neck(module, fillColor, outlineColor) {
  const [yBottom, yTop] = [module * 16, module * 16 - 255];
  
  onlyFill(fillColor);
  quad(
    module * 5, yBottom,
    module * 5, module * 6,
    module * 11, module * 6,
    module * 11, yBottom) ;
  
  onlyOutline(outlineColor);
  line(module * 5, yBottom, module * 5, yTop); // neck, left side
  line(module * 11, yBottom, module * 11, yTop); // neck, right side
}

function forehead(module, fillColor, outlineColor) {
  onlyFill(fillColor);
  quad(
    module * 4, module * 6,
    module * 5, module * 4,
    module * 11, module * 4,
    module * 12, module * 6);
  
  onlyOutline(outlineColor);
  line(module * 4, module * 6, module * 5, module * 4); // forehead, left side
  line(module * 5, module * 4, module * 11, module * 4); // forehead, bottom side
  line(module * 11, module * 4, module * 12, module * 6); // forehead, right side
}

function jaw(module, fillColor, outlineColor) {
  onlyFill(fillColor);
  triangle( // jaw, left side
    module * 4, module * 12,
    module * 7, module * 12,
    module * 7, module * 14);
  triangle( // jaw, right side
    module * 12, module * 12,
    module * 9, module * 12,
    module * 9, module * 14);

  onlyOutline(outlineColor);
  line(module * 4, module * 12, module * 7, module * 14); // jaw, left side
  line(module * 7, module * 14, module * 9, module * 14); // jaw, bottom side
  line(module * 9, module * 14, module * 12, module * 12); // jaw, right side
}

function leftEar(module, earW, palette) {
  const [fillColor, outlineColor] = [palette.NAVY, palette.WHITE];

  onlyFill(fillColor);
  quad(
    module * 4, module * 7,
    module * 4, module * 8,
    module * 3, module * 8,
    module * 3, module * 7); 
    
  bothFillAndOutline(fillColor, outlineColor);
  line(module * 3, module * 7, module * 3, module * 8); // left ear, top side
  arc( // left ear, mid side
    module * 4, module * 7,
    earW, earH,
    PI, PI + HALF_PI);
  arc( // left ear, bottom side
    module * 4, module * 8,
    earW, earH,
    HALF_PI, PI);
}
      
function rightEar(module, earW, palette) {
  const [fillColor, outlineColor] = [palette.NAVY, palette.WHITE];

  onlyFill(fillColor);
  quad(
    module * 12, module * 7,
    module * 12, module * 8,
    module * 13, module * 8,
    module * 13, module * 7)

  bothFillAndOutline(fillColor, outlineColor);
  line(module * 13, module * 7, module * 13, module * 8); // right ear, top side
  arc( // right ear, mid side
    module * 12, module * 7,
    earW, earH,
    PI + HALF_PI, 0); 
  arc( // right ear, bottom side
    module * 12, module * 8,
    earW, earH,
    0, HALF_PI); 
}

function face(module, fillColor, outlineColor) {
  onlyFill(fillColor);
  quad(
    module * 4, module * 6,
    module * 4, module * 12,
    module * 12, module * 12,
    module * 12, module * 6);

  onlyOutline(outlineColor);
  line(module * 12, module * 12, module * 12, module * 6); // face, left side
  line(module * 4, module * 6, module * 4, module * 12); // face, right side
}

function openedEyes(module, fillColor, outlineColor) {
  const mouseDistance = dist(mouseX, mouseY, pmouseX, pmouseY);
  const [eyeW, eyeY] = [module * 2, module * 7 + module / 2];
  
  // mouse interactions
  const pupilW = module * (map(mouseDistance, 0, width, 10, 0, true) / 10); 
  const pupilY = map(mouseY, 0, height, module * 7, module * 8, true); 
  const leftPupilX = map(mouseX, 0, width, module * 5, module * 7, true);; 
  const lightPupilX = map(mouseX, 0, width, module * 9, module * 11, true);

  bothFillAndOutline(outlineColor, outlineColor);
  ellipse(module * 6, eyeY, eyeW, module) // left eye
  ellipse(module * 10, eyeY, eyeW, module) // right eye
  
  onlyFill(fillColor);
  ellipse(leftPupilX, pupilY, pupilW) // left pupil
  ellipse(lightPupilX, pupilY, pupilW) // right pupil
}

function closedEyes(module, outlineColor) {
  const eyeY = module * 7 + module / 2;
  
  onlyOutline(outlineColor); 
  line(module * 5, eyeY, module * 7, eyeY); // left eye
  line(module * 9, eyeY, module * 11, eyeY); // right eye
}

function details(module, outlineColor) {
  onlyOutline(outlineColor);
  line(module * 4, module * 6, module * 8, module * 6); // brow, left side
  line(module * 9, module * 6, module * 11, module * 6); // brow, right side
  line(module * 8, module * 6, module * 7, module * 10); // nose, left side
  line(module * 7, module * 10, module * 9, module * 10); // nose, bottom side
  line(module * 7, module * 12, module * 9, module * 12); // mouth
}