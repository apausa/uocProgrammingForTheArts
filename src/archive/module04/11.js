let strings;

function preload() {
  strings = loadStrings("https://codelab.uoc.edu/filemanager/source_repo/cgutierrezval/rainbow.txt");
}

function setup() {
  	createCanvas(400, 400);
  	textAlign(CENTER);
  	noLoop();
}

function draw() {
  	const module = height / (strings.length + 1);
 	background(50);
  
  	strings.forEach((string, i) => {
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);
      
      fill(r, g, b);
      text(string, width / 2, module * (i + 1));
    })
}