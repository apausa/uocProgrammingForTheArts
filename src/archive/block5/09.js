function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    noLoop();
  }
  
  function draw() {
    const paragraph = "There's nothing you can do that can't be done, Nothing you can sing that can't be sung, Nothing you can say, but you can learn how to play the game, It's easy, Nothing you can make that can't be made, No one you can save that can't be saved, Nothing you can do, but you can learn how to be you in time, It's easy. All you need is love, all you need is love, All you need is love love love is all you need...";
    const words = paragraph.split(' '); 
  
    background('#FFF');
    
    words.forEach(word => {
      const x = random(0, width);
      const y = random(0, height);
      
      fill((word === 'love') ? '#F00' : '#000');
      text(word, x, y);
    })
  }
  