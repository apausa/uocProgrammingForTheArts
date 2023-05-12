let [pacMan, balls] = [null, null];

function createBalls(module) {
  balls = [];
  
  for (let i = 3; i < 6; i++) {
    let b = new Ball(module, i);
    
    balls.push(b);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  const module = (width / 7);
  
  createBalls(module);
  pacMan = new Pacman(module); 
}

function draw() {
  background('#000');
  balls.forEach(ball => {
    ball.generate();
    ball.intersect(pacMan)})
  pacMan.generate();
  
  if (keyIsDown(LEFT_ARROW)) pacMan.moveLeft();
  if (keyIsDown(RIGHT_ARROW)) pacMan.moveRight(); 
}


class Ball {
  constructor(module, position) {
    this.y = height / 2;
    this.x = module * position;
    this.w = 20;
  }
  
  intersect(pacMan) {
    let d = dist(this.x, this.y, pacMan.x, pacMan.y);
    if (d <= this.w) { // when eaten
      const eatenBall = balls.findIndex( // find ball
        ball => ball.x === this.x && ball. y === this.y);
      
      balls.splice(eatenBall, 1); // delete ball
    };
  }
  
  generate() {
    fill('#FFF');
    circle(this.x, this.y, this.w);
  }
}

class Pacman {
  constructor(module) {
    this.x = module * 2;
    this.y = height / 2; 
    this.w = 80;
    this.changeShape = false;
    this.hw = this.w / 2;
    this.module = module;
  }
 
  moveLeft(){
    if ((this.x + this.hw) < 0) { // when out of frame
      this.x = width; // reset position
      
      createBalls(this.module); // recreate balls
      
    } else this.x -= 1;
  }
  
  moveRight(){
    if ((this.x - this.hw) > width) {
      this.x = 0;
      
      createBalls(this.module);
      
    } else this.x += 1;
  }
  
  generate() {
    noStroke();
    fill('#FF0');
    
    if ((frameCount % 8) === 1) // every 8 frames 
      this.changeShape = !this.changeShape;
    (this.changeShape)
      ? arc(this.x, this.y, this.w, this.w, QUARTER_PI, -QUARTER_PI)
      : circle(this.x, this.y, this.w);
  }
}
