let cover = null; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  noLoop();
  
  const metadata = {
    background: '#000',
    id: '1', 
    title: 'Pedro Paramo',
    author: 'Juan Rulfo',
    editorial: 'Editorial RM',
  }
  
  cover = new Cover(metadata); 
}

function randomPositions() {
  return {
    x: random(0, width),
    y: random(0, height),
  }
}

function draw() {
  cover.setBackground();
  
  cover.setTitle(randomPositions());
  cover.setAuthor(randomPositions());
  cover.setEditorial(randomPositions());
}

class Cover {
  constructor(metadata) {
    this.background = metadata.background;
    this.id = metadata.id; 
    this.title = metadata.title;
    this.author = metadata.author; 
    this.editorial = metadata.editorial;
  }
  
  setBackground() {
    background(this.background);
  }
  
  setTitle({x, y}) {
    fill('#FFF')
    textSize(24);
    textStyle(BOLD);
    
    text(this.title, x, y);
  }
  
  setAuthor({x, y}) {
    fill('#FFF')
    textSize(16);
    textStyle(BOLD);
    
    text(this.author, x, y);
  }
  
  setEditorial({x, y}) {
    fill('#FFF')
    textSize(16);
    textStyle(NORMAL);
    
    text(this.editorial, x, y);
  }
}