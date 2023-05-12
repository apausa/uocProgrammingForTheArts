const letterArr = [];

function setup() {
  const word = ('BOUNCY').split('');
  
  createCanvas(500, 500);
  
  word.forEach(letter => {
    const position = word.findIndex(l => l === letter);
    const module = width / (word.length + 1);
   	const letterObj = new Shape(letter, module, position);
 
    letterArr.push(letterObj);
  });
}

function draw() {
  background('#3669c9');
  
  letterArr.forEach(letter => {
    letter.generate();
    letter.bounce();
  })
}

class Shape {
  constructor(letter, module, position) {
    this.letter = letter;
    this.module = module;
    this.position = position;
    
    this.reverse = (this.position % 2);
    this.y = height / 2;
  }
  
  bounce() {
    const marginTop = this.module * 3;
    const marginBottom = height - (this.module * 3);
      
    if (this.y <= marginTop || this.y >= marginBottom)
      this.reverse = !this.reverse;
    this.y = (this.reverse)
      ? this.y + 0.5 : this.y - 0.5;
  }
  
  generate() {
    const x = this.module * (this.position + 1);
    
    fill("#FFF");
    textFont('Courier')
    textSize(this.module);
    textAlign(CENTER, CENTER);
    text(this.letter, x, this.y);
  }
}