let inicio = false;
let contador = 0;

function setup() {
	createCanvas(1024, 768);
}

function draw() {
  	if (contador === 10) {
      stroke('#0F0');
      inicio = true;
    } else {
      stroke('#E96763');
      contador++;
    }
  
    console.log(inicio);
    /* Se imprime el boolean 'false',
     * hasta que el valor de 'contador' es 10,
     * y entonces pasa a ser 'true' */
  
	background('#3B5762');
	strokeWeight(20);
	line(0, 0, width, height);
}
