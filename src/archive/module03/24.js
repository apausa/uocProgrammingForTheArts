// Variables globales

const animations = [];

const strings = {
  title: 'Title',
  subtitle: 'Subtitle',
  author: 'Author',
  time: "Time",
  place: 'Place',
  description1: 'description',
  description2: 'description',
  description3: 'description',
  description4: 'description.',
}

const palette = {gray: 32, white: 255}

const size = {
  rem0_75: 12,
  rem1_125: 18,
  rem1_5: 24, 
  rem2_5: 36,
}

let img = null;

function setup() {
  const lines = 32;
  
  createCanvas(600, 800);

  for (let i = 0; i < lines; i++) {
    animations[i] = new Animation(lines, i)
  }
}

  
function keyPressed() {
  /* Interacción con el teclado. Cuando se pulsa la barra espaciadora se
   * genera una nueva semilla de ruido */
  if (keyCode === 32) animations.forEach(
    particle => { particle.regenerate() }
  )
}

function draw() {
  const module = height / 16;

  background(palette.gray);
  renderCaption(module); 
  renderAnimation(module); 
}

function renderCaption(module) {
  const halfModule = module / 2;
  
  // Renderiza el fondo
  stroke(palette.gray);
  strokeWeight(2);
  fill(palette.white)
  rect(0, module * 12, width, module * 4)

  // Configura el texto
  noStroke();
  fill(palette.gray)
  textAlign(LEFT, CENTER);
  textFont('Helvetica Neue');

  textSize(size.rem0_75);
  text(strings.description1, halfModule, module * 14 + module / 4);
  text(strings.description2, halfModule, module * 14 + halfModule);
  text(strings.description3, halfModule, module * 15 - module / 4);
  text(strings.description4, halfModule, module * 15);
  textSize(size.rem1_125);
  text(strings.time,  halfModule, module * 13);
  text(strings.place,  halfModule, module * 13  + halfModule);
}

function renderAnimation(module) {
  // Configura el texto
  fill(palette.white)
  textAlign(CENTER, CENTER);
  text(strings.author,  module * 6, module * 11);
  textFont('Snell Roundhand');

  textSize(size.rem2_5);
  text(strings.title, module * 6, module);
  textSize(size.rem1_5);
  text(strings.subtitle, module * 6, module * 2 - module / 4);

  // Renderiza la animación
  stroke(255);
  noFill();
  animations.forEach(particle => {
    particle.generate();
    particle.increment();
  })
}

// Clases

class Animation {
  constructor(lines, i) {
    this.finalIndex = lines; // Número total de animaciones
    this.currentIndex = i; // Índice de la animación
    this.amplitude = width / 2; // Amplitud máxima del círculo
    this.zOff = 0; // Tercera coordenada de ruido, que corresponde al tiempo. 
  }

  generate() {
    strokeWeight(this.currentIndex / this.finalIndex);

    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 64) { // Número total de vértices
      const mappedNoise = map(this.returnNoise(j), 0, 1, 0, this.amplitude); // Ruido mapeado a la amplitud del círculo

      /* Ruido mapeado, por el seno y el coseno del vértice para calcular
       * su posición en el eje X e Y respectivamente. */
      const x = mappedNoise * sin(j) + width / 2;
      const y = mappedNoise * cos(j) + width / 2;

      vertex(x, y);
    } 
    endShape(CLOSE);
  }

  returnNoise(j) {
    /* Índice de la animación mapeado a un valor decimal, para que el
     * resultado sea dinámico y el output ondulado en cada iteración. */
    const mappedIndex = map(this.currentIndex, 0, this.finalIndex, 0, 1); 

    /* Seno y coseno del vértice mapeado a un valor entre 0 y el índice de
     * la animación mapeado. Es decir, cuanto más grande es el índice, más
     * se distorsiona la animación. También, es importante destacar que el
     * seno y el coseno devuelven valores entre -1 y 1, lo que genera
     * outputs simétricos. Así que el valor mapeado más bajo es 0 para
     * que esto no suceda. */
    const mappedSin = map(sin(j), -1, 1, 0, mappedIndex);
    const mappedCos = map(cos(j), -1, 1, 0, mappedIndex);

    /* Primera y segunda coordenada de ruido. Al seno y coseno del vértice
     * mapeado, se le suma el seno y coseno del tiempo sin mapear
     * respectivamente, para que la animación sea más compleja. */
    const xOff = sin(this.zOff) + mappedSin;
    const yOff = cos(this.zOff) + mappedCos;

    return noise(xOff, yOff, this.zOff); 
  }

  increment() {
    /* Interacción con el ratón. El tiempo se ralentiza cuanto más cerca se
     * encuentra del centro de la animación */
    const distance = dist(mouseX, mouseY, this.amplitude, this.amplitude);
    const speed = map(distance, 0, width, 0.0001, 0.01);

    this.zOff += speed;
  }

  regenerate() {
    noiseSeed(random() * 100);
  }
}
