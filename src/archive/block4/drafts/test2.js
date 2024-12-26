// Two dimensional noise

const particles = [];

function setup() {
  const total = 64;

  createCanvas(600, 800);

  for (let i = 0; i < total; i++) {
    particles[i] = new Particle(total, i);
  }
}

function draw() {
  background(10);

  particles.forEach(particle => {
    particle.generate();
  })
}

class Particle {
  constructor(total, i) {
    this.total = total;
    this.index = i;

    this.zOff = 0;

    this.xOriginal = width / 2
    this.yOriginal = height / 2;

  }

  returnNoise(j) {
    const mappedIndex = map(this.index, 0, this.total, 0, 1);

    const xOffLastCircles = sin(this.zOff);
    const yOffLastCircles = cos(this.zOff);
    const xOffFirstCircles = map(sin(j), -1, 1, 0, mappedIndex);
    const yOffFirstCircles = map(cos(j), -1, 1, 0, mappedIndex);
    const xOff = xOffLastCircles + xOffFirstCircles;
    const yOff = yOffLastCircles + yOffFirstCircles;

    return noise(xOff, yOff);
  }

  generate() {
    const roundness = 128;
    const amplitude = this.xOriginal;
    const velocity = 0.005;

    stroke('white');
    strokeWeight(this.index / this.total);
    noFill();
    
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / roundness) {
      const mappedNoise = map(this.returnNoise(j), 0, 1, 0, amplitude);

      const x = mappedNoise * sin(j) + this.xOriginal;
      const y = mappedNoise * cos(j) + this.yOriginal;

      vertex(x, y);
    }
    endShape(CLOSE);

    this.zOff += velocity;
  }
}
