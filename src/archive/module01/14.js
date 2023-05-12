function setup() {
    createCanvas(1024, 768);
  	noLoop();
}

function draw() {
    const side = 100;
  	const [columns, rows] = [4, 3]
  
    noFill();
    stroke(0);

    for(let i = 0; i < columns; i++){
      for (let j = 0; j < rows; j++) {
        square(120 * i, 120 * j, side);
      }
    }
}