var slider = null;

function setup() {
  createCanvas(400, 400);
 
  slider = createSlider(0, 255, 100);
  slider.position(40, 10);
  slider.style('width', '320px');
}

function draw() {
  let sliderValue = slider.value();
  background(sliderValue);
  
  circle(200, 200, sliderValue);
}