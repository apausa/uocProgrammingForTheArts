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
  textAlign(CENTER);
  noLoop();
  
  cover = new Cover(metadata); 
}

function draw() {
  const halfWidth = width / 2;
  background(cover.background);
  
  fill('#FFF')
  textSize(24);
  textStyle(BOLD);
  text(cover.title, halfWidth, height / 4);
  textSize(16);
  text(cover.author, halfWidth, height / 3);
  textStyle(NORMAL);
  text(cover.editorial, halfWidth, height - (height / 4));
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