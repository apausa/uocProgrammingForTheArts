function setup() {  
  createCanvas(500, 500);
  noLoop();
  background("white");
}

function draw() {  
  const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  
  fill(200);
  textSize(12);
  textLeading(15);
  text(paragraph, width / 2, 20, 100, 460);
  
  const letters = paragraph.replaceAll(" ", ""); // removes spaces
  console.log(letters.length) // 377
}
