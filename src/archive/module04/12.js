let cover = null; 
const metadata = {
  background: '#000',
  id: '1', 
  title: 'Pedro Paramo',
  author: 'Juan Rulfo',
  editorial: 'Editorial RM',
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  cover = new Cover(metadata); 
}

function draw() {
  background(cover.background);
}

class Cover {
  constructor(metadata) {
    this.background = metadata.background;
    this.id = metadata.id; 
    this.title = metadata.title;
    this.author = metadata.author; 
    this.editorial = metadata.editorial;
  }
}