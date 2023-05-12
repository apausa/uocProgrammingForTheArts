let sliderBody = null;
let sliderEye = null;

function setup() {
  createCanvas(500, 500);
 
  sliderBody = createSlider(50, 300, 300);
  sliderEye = createSlider(2, 8, 2);
  
  sliderBody.position(10, 10);
  sliderEye.position(10, 30);
  sliderBody.style('width', '120px');
  sliderEye.style('width', '120px');
}

function draw() {
  const hw = width / 2;
  const diameterBody = sliderBody.value();
  const diameterEye = diameterBody / sliderEye.value();
  const diameterPupil = diameterEye / 2;
  
  const eyeX = map(mouseX, 0, width, hw - diameterEye / 4, hw + diameterEye / 4, );
  const pupilX = map(mouseX, 0, width, hw - diameterEye / 2, hw + diameterEye / 2, );
  
  background(220);
  
  noStroke();
  
  fill(0,200,0);
  circle(hw, height - diameterBody / 2, diameterBody);
  
  fill(255);
  circle(eyeX, height - diameterEye - diameterEye / 2, diameterEye);
  
  fill(0);
  circle(pupilX, height - diameterEye - diameterEye / 2, diameterPupil);
}