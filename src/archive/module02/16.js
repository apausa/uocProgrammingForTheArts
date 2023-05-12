let sliderHue = null; 
let sliderSaturation = null;
let sliderBrightness = null;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  
  sliderHue = createSlider(0, 360, 180);
  sliderSaturation = createSlider(0, 100, 50);
  sliderBrightness = createSlider(0, 100, 50);
  
  sliderHue.position(10, 10);
  sliderSaturation.position(10, 30);
  sliderBrightness.position(10, 50);
  
  sliderHue.style('width', '80px');
  sliderSaturation.style('width', '80px');
  sliderBrightness.style('width', '80px');
}

function draw() {
  const h = sliderHue.value();
  const s = sliderSaturation.value();
  const b = sliderBrightness.value();
  
  noStroke();
  background(h, s / 2, b / 2);
  fill(h, s, b);
  circle(200, 200, 300);
  
}