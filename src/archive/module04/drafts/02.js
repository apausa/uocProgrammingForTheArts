const particles = [];

function setup() {
  createCanvas(600, 800);

  for (let i = 0; i < 8; i++) {
    particles[i] = new Particle(i);
  }
}

function draw() {
  background('rgba(0, 51, 160, 1)');

  particles.forEach(particle => {
    particle.generate();
  })
}

class Particle {
  constructor(i) {
    this.halfWidth = width / 2
    this.halfHeight = height / 2;
    this.module = height / 16;
    this.zOff = 0;
    this.index = i;
  }

  generate() {
    stroke('white');
    noFill();
    
    noiseSeed(this.index);
    beginShape();
    for (let i = 0; i < TWO_PI; i += 0.01) { // roughness
      const xOff = map(cos(i), -1, 1, 0, 1); // noise
      const yOff = map(sin(i), -1, 1, 0, 1);
      const n = noise(xOff, yOff, this.zOff);
      const r = map(n, 0, 1, this.module, this.module * 4); // amplitude
      const x = r * cos(i) + this.halfWidth;
      const y = r * sin(i) + this.halfHeight;

      vertex(x, y);
    }
    endShape(CLOSE);
    this.zOff += 0.01;
  }
}
