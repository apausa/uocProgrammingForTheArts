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
    strokeWeight(this.i / this.total);
    noiseSeed(2);
    noFill();
    
    beginShape();
    for (let i = 0; i < TWO_PI; i += TWO_PI / 128) {
      // const xOff = map(cos(i), -1, 1, 0, 1); 
      // const yOff = map(sin(i), -1, 1, 0, 1);
      // const n = noise(xOff, yOff, this.zOff);

			let xOffset = sin(this.zOff * 0.05) * 100;
			let yOffset = cos(this.zOff * 0.05) * 100;
			let n = noise(xOffset + sin(i) * 0.01 * this.index, yOffset + cos(i) * 0.01 * this.index, this.zOff);


      const r = map(n, 0, 1, 0, 512);
      const x = r * sin(i) + halfWidth;
      const y = r * cos(i) + halfHeight;

      vertex(x, y);
    }
    endShape(CLOSE);

    this.zOff += 0.0003;
  }
}
