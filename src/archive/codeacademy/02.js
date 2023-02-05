// Understanding the dist() Function

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  
  function draw() {
    background(0);
    let canvas_dist = dist(0, 0, width, height)
  
    for (let i = 0; i <= width; i += 16) {
      for (let j = 0; j <= height; j += 16) {
        let distance = dist(mouseX, mouseY, i, j);
        let size = (distance / canvas_dist) * 16;
        
        fill(255);
        ellipse(i, j, size, size);
      }
    }
}
  