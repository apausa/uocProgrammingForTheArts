function setup() {
    createCanvas(500, 400);
    noLoop();
  }
  
  function drawHeader(x) {
    fill('#000');
    textStyle(BOLD);
    text("HABITANTES POR CIUDAD", x, 60);
  }
  
  function drawGraphic(x1) {
    const cities = ["Alicante", "Barcelona", "Burgos", "Madrid", "Pamplona", "Salamanca", "Sevilla"];
    const habitants = [331577, 1615000, 176115, 3174000, 199066, 144692, 690000];
    const [MAX_1, MAX_2] = [3174000, 200];
    const biggestCity = Math.max(...habitants)
    
    cities.forEach((city, i) => {
      const mappedHabitants = map(habitants[i], 0, MAX_1, 0, MAX_2);
      const position = {x1, x2: x1 + mappedHabitants, y: i * 30};
      const padding = {paddingX: 8, paddingY: 109};
      
      fill((biggestCity === habitants[i]) ? '#000' : 150); // fix
      dibujarBarra(position, mappedHabitants);
      ciudadesEjeY(city, position, padding);
      valoresGrafico(habitants[i], position, padding);
    })
  }
  
  function draw() {
    const x1 = 100;
    
    background('#FFF');
    drawHeader(x1)
    drawGraphic(x1);
  }
  
  function dibujarBarra(position, mappedHabitants) {
    const {x1, y} = position;
    
    noStroke();
    rect(x1, y + 100, mappedHabitants, 10);
  }
  
  function ciudadesEjeY(city, position, padding){
    const {x1, y} = position;
    const {paddingX, paddingY} = padding;
    
    textAlign(RIGHT);
    textStyle(NORMAL);
    text(city, x1 - paddingX, y + paddingY);
  }
  
  function valoresGrafico(habitants, position, padding){
    const {y, x2} = position;
    const {paddingX, paddingY} = padding;
    
    textAlign(LEFT);
    textStyle(NORMAL);
    text(numberWithCommas(habitants), x2 + paddingX, y + paddingY);
  }
  
  // Función para añadir los puntos a los millares
  function numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  