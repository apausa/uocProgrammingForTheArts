function setup() {
    createCanvas(1024, 768);
  	noLoop();
}

function draw() {
    const side = 50;
  	const [column, row] = [5, 3];
  
    noFill();
    stroke(0);
    strokeWeight(1);

    for(var i = 0; i < column; i++){
      for (let j = 0; j < row; j++) {
        fill((i === 2) ? '#000' : '#FFF');
        square(60 * i, 60 * j, side);
      }
    }
}
