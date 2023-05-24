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
  cover.setBackground();
  cover.setTitle();
  cover.setAuthor();
  cover.setEditorial();
}

class Cover {
  constructor(metadata) {
    this.background = metadata.background;
    this.id = metadata.id; 
    this.title = metadata.title;
    this.author = metadata.author; 
    this.editorial = metadata.editorial;
    
    this.halfWidth = width / 2;
  }
  
  setBackground() {
    background(this.background);
  }
  
  setTitle() {
    fill('#FFF')
    textSize(24);
    textStyle(BOLD);
    
    text(this.title, this.halfWidth, height / 4);
  }
  
  setAuthor() {
    fill('#FFF')
    textSize(16);
    textStyle(BOLD);
    
    text(this.author, this.halfWidth, height / 3);
  }
  
  setEditorial() {
    fill('#FFF')
    textSize(16);
    textStyle(NORMAL);
    
    text(this.editorial, this.halfWidth, height - (height / 4));
  }
}