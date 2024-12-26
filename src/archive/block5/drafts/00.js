const particles = [];
const palette = {
  blue: '0, 51, 160', 
  white: '255, 255, 255', 
  black: '0, 0, 0', 
}

function setup() {
  createCanvas(600, 800);

  for (let i = 0; i < 256; i++) {
    const x = random(width);
    const y = random(height);

    particles[i] = new Particle(x, y, i);
  }
}

function draw() {
    background('rgba(0, 51, 160, 1)');

    particles.forEach(particle => {
      particle.setColor()
      particle.generate();
      particle.animate();
  })
}

class Particle {
  constructor(xOff, yOff, i) {
    [this.xOff, this.yOff] = [xOff, yOff];
    [this.x, this.y] = [null, null];
    this.index = i;

    this.diameter = height / 64;
    this.color = null;
  }

  intersect(other) {
    const d = dist(this.x, this.y, other.x, other.y);

    return d < (this.diameter) && this.index !== other.index;
  }

  setColor() {
    const intersected = particles.some(other => this.intersect(other));

    this.color = intersected ? 'white' : 'rgba(0, 51, 160, 1)';
  }

  animate() {
    this.x = map(noise(this.xOff), 0, 1, -width, width * 2);
    this.y = map(noise(this.yOff), 0, 1, -height, height * 2);
    
    this.xOff += 0.001; // increment position
    this.yOff += 0.001; // increment position
  }

  generate() {
    stroke('white');
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
}
