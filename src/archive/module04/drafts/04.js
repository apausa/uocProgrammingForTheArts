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
    this.zOff = 0;
    this.index = i;
  }

  generate() {
    const halfWidth = width / 2
    const halfHeight = height / 2;

    stroke('white');
    strokeWeight(this.index / this.total);
    noFill();
    
    beginShape();
    for (let i = 0; i < TWO_PI; i += TWO_PI / 128) { // roughess

      const xOffset = sin(this.zOff) + map(sin(i), -1, 1, 0, this.index * 0.01); 
      const yOffset = cos(this.zOff) + map(cos(i), -1, 1, 0, this.index * 0.01);
			
      let n = noise(xOffset, yOffset, this.zOff);

      const r = map(n, 0, 1, 0, width / 2); // amplitude
      const x = r * sin(i) + halfWidth;
      const y = r * cos(i) + halfHeight;

      vertex(x, y);
    }
    endShape(CLOSE);

    this.zOff += 0.01;
  }
}
