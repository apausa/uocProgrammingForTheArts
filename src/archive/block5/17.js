/* Idea

 * He desarrollado una animación con las palabras de cada titular 
 * resultante al buscar 'creative artificial intelligence' en la API de 
 * GNews. Así, he continuado la experimentación que comencé en el 
 * anterior ejercicio con el método 'noise', para representar con 
 * palabras el movimiento de insectos alrededor de una luz en 
 * referencia a la idea de una inteligencia artificial que cobra vida. 
 * 
 * Código 

 * Si la llamada a la API se completa, entonces se indexan los titulares 
 * de la respuesta, pero si no se completa, entonces se registran los 
 * titulares del 'mock' para asegurar que la animación funciona 
 * siempre. El código también carga la tipografía OCR-A.
 * 
 * Después, se instancia una clase para controlar el estado de los 
 * titulares. La propiedad 'words' es un array de objetos con la
 * información de cada palabra del titular actual, como su
 * posición o coordenadas de ruido.
 * 
 * Interacción
 * 
 * La interacción con el ratón cambia el color de una palabra a negro
 * cuando se hace click en ella. Que recupera el color si se vuelve a 
 * hacer click. Así, se pueden destacar palabras para generar un nuevo 
 * significado.
 * 
 * Mientras que la interacción con el teclado, renderiza las palabras del 
 * siguiente titular y genera un nuevo 'backgroundColor' y 'textColor' 
 * cuando se pulsa la barra espaciadora. Además, vuelve a empezar 
 * otra vez cuando se llega al final. */

// Constantes
const MOCK = {
    "totalArticles": 448,
    "articles": [
      {
        "title": "How Scientists Are Using AI to Help Protect the Oceans",
        "description": "You’ve seen the art AI image generators can create, and you may have played with natural language AI chatbots. You’ve benefited from artificial",
        "content": "How Scientists Are Using AI to Help Protect the Oceans\nYou’ve seen the art AI image generators can create, and you may have played with natural language AI chatbots. You’ve benefited from artificial intelligence tools recommending you music and sugge... [6044 chars]",
        "url": "https://www.gizmodo.com.au/2022/12/how-scientists-are-using-ai-to-help-protect-the-oceans/",
        "image": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/12/22/iStock-1408518230.jpg?quality=80&resize=1280,720",
        "publishedAt": "2022-12-28T04:08:09Z",
        "source": {
          "name": "Gizmodo Australia",
          "url": "https://www.gizmodo.com.au"
        }
      },
      {
        "title": "Y Combinator-backed Poly uses AI to generate art assets",
        "description": "Poly, a startup developing generative AI tools for asset creation. has raised over $3 million in venture capital.",
        "content": "As generative AI like ChatGPT and DALL-E 2 attract investor attention, startup entrepreneurs are looking to cash in with new business models built around them. One of the more interesting ventures to emerge from the space recently is Poly, which lets... [6139 chars]",
        "url": "https://techcrunch.com/2022/12/27/y-combinator-backed-poly-uses-ai-to-generate-art-assets/",
        "image": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1314979456.jpg?resize=1200,675",
        "publishedAt": "2022-12-27T22:30:24Z",
        "source": {
          "name": "TechCrunch",
          "url": "https://techcrunch.com"
        }
      },
      {
        "title": "AI made it possible to create a picture of almost anything in 2022",
        "description": "The rapid rise of text-to-image generators powered by artificial intelligence has thrilled some people, but left others concerned for the future of art",
        "content": "The rapid rise of text-to-image generators powered by artificial intelligence has thrilled some people, but left others concerned for the future of art\nWe asked DALL-E 2 to generate ‘An oil painting of a tabby cat reading New Scientist magazine on th... [479 chars]",
        "url": "https://jimmyspost.com/ai-made-it-possible-to-create-a-picture-of-almost-anything-in-2022",
        "image": "https://jimmyspost.com/wp-content/uploads/2022/12/AI-made-it-possible-to-create-a-picture-of-almost.jpg",
        "publishedAt": "2022-12-27T22:30:19Z",
        "source": {
          "name": "Jimmys Post",
          "url": "https://jimmyspost.com"
        }
      },
      {
        "title": "A Nightmare Face Is Haunting AI Art, And There's A Reason We Shouldn't Look Away",
        "description": "She's out there somewhere, lurking in a parallel universe of possibilities.",
        "content": "She's out there somewhere, lurking in a parallel universe of possibilities. All you have to do to summon her into being is type the right prompt into an AI image generator.\nLike a digital incantation, the words will reveal the eerie face of a middle-... [7979 chars]",
        "url": "https://www.sciencealert.com/a-nightmare-face-is-haunting-ai-art-and-theres-a-reason-we-shouldnt-look-away",
        "image": "https://www.sciencealert.com/images/2022/12/LoabAIArtwork.jpg",
        "publishedAt": "2022-12-24T17:00:08Z",
        "source": {
          "name": "ScienceAlert",
          "url": "https://www.sciencealert.com"
        }
      },
      {
        "title": "Tech News: 5 Things to Know in Australia Today",
        "description": "From the ACCC's verdict on Telstra-TPG network sharing to AI art copyright, here are five things headlining tech news today in Australia.",
        "content": "Tech News: 5 Things to Know in Australia Today\nGood morning. Let’s get you up to speed on today’s tech news.\n1. The ACCC kills Telstra and TPG’s network-sharing deal (for now)\nStarting in Australia and the ACCC has ruled against the Telstra and TPG n... [3321 chars]",
        "url": "https://www.gizmodo.com.au/2022/12/tech-news-australia-5-things-to-know-89/",
        "image": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/12/22/5-things3.png?quality=80&resize=1280,720",
        "publishedAt": "2022-12-21T22:17:34Z",
        "source": {
          "name": "Gizmodo Australia",
          "url": "https://www.gizmodo.com.au"
        }
      },
      {
        "title": "OpenAI’s ChatGPT to LaMDA as ‘sentient’: How AI captured the tech conversation in 2022",
        "description": "AI Chatbots like ChatGPT took the world by surprise with their ability to generate extremely human-like responses to queries, while image generative models like DALL-E showed that AI will soon generate art.",
        "content": "What does one think of when we use the term ‘Artificial Intelligence’? Does it mean a computer that talks back to us, just as a human would? Or a robot that is indistinguishable from a human? While AI is yet to advance to such levels, 2022 gave us a ... [8252 chars]",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/yearender-ai-2022-openai-dalle-chatgpt-lamda-sentient-deepmind-8330036/",
        "image": "https://images.indianexpress.com/2022/12/ai-2022-yearender.jpg",
        "publishedAt": "2022-12-21T10:40:57Z",
        "source": {
          "name": "The Indian Express",
          "url": "https://indianexpress.com"
        }
      },
      {
        "title": "TikTokers are exploiting a dumb AI to generate giant anime boobs",
        "description": "TikTokers are tricking the AI Manga filter into generating images with cleavage by holding up cups and bowls. It’s just another example of AI generated art exhibiting societal bias.",
        "content": "TikTok is stuffed with all sorts of filters that make the app a little more chaotic. Often they’ll take off and inspire a massive trend. Right now, one such trend involves using the AI Manga filter to generate a portrait of oneself, in anime style. B... [1767 chars]",
        "url": "https://www.polygon.com/23519654/tiktok-ai-manga-filter-boobs-bowls-pillows",
        "image": "https://cdn.vox-cdn.com/thumbor/FcC4J0mSmUkSK-CYwi0VJoG0GMM=/0x308:1072x869/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24306530/Screenshot_20221220_141715.png",
        "publishedAt": "2022-12-20T23:03:58Z",
        "source": {
          "name": "Polygon",
          "url": "https://www.polygon.com"
        }
      },
      {
        "title": "AI Art: artisti dichiarano guerra e usano personaggi famosi per portare le compagnie in tribunale",
        "description": "Alcuni artisti hanno deciso di dichiarare guerra all'AI Art usando alcuni personaggi famosi coperti da copyright per provare a far finire le...",
        "content": "Molti artisti hanno deciso di dichiarare apertamente guerra all'AI Art, ossia alle immagini generate tramite algoritmi di intelligenza artificiale, utilizzando alcuni personaggi famosi, in particolare quelli di Disney, come cavalli di troia per porta... [3215 chars]",
        "url": "https://multiplayer.it/notizie/ai-art-artisti-dichiarano-guerra-e-usano-personaggi-famosi-per-portare-le-compagnie-in-tribunale.html",
        "image": "https://multiplayer.net-cdn.it/thumbs/images/2022/12/19/fjq3naxxeaa2keo_jpg_1200x0_crop_q85.jpg",
        "publishedAt": "2022-12-19T14:18:17Z",
        "source": {
          "name": "Multiplayer.it",
          "url": "https://multiplayer.it"
        }
      },
      {
        "title": "Artists Stage Mass Online Protest Against AI Image Generators",
        "description": "Artists have staged a mass online protest against image-sharing site ArtStation after AI generated art appeared on the site.",
        "content": "Artists have staged a mass online protest against image-sharing site ArtStation after artificial intelligence (AI) generated art appeared on the site.\nIn early December, AI-generated images began appearing on the homepage of ArtStation, a website tha... [4657 chars]",
        "url": "https://petapixel.com/2022/12/19/artists-stage-mass-online-protest-against-ai-image-generators/",
        "image": "https://petapixel.com/assets/uploads/2022/12/notoai.jpg",
        "publishedAt": "2022-12-19T14:15:31Z",
        "source": {
          "name": "PetaPixel",
          "url": "https://petapixel.com"
        }
      },
      {
        "title": "Forget AI art - AI-powered cyberattacks are what we should be worried about",
        "description": "AI-generated art may be the talk of the town but AI-powered cyberattacks have a much higher chance of disrupting society as a whole.",
        "content": "From the viral Lensa app to the image generator Starryai , AI art has been in the news quite a lot lately and for good reason. Images that once took human artists hours or even days to create can now be made by an AI art generator in a fraction of th... [5057 chars]",
        "url": "https://www.tomsguide.com/news/forget-ai-art-ai-powered-cyberattacks-are-what-we-should-be-worried-about",
        "image": "https://cdn.mos.cms.futurecdn.net/RaTFwe4c4UFMaw2jp4df5V-1200-80.jpg",
        "publishedAt": "2022-12-19T10:00:43Z",
        "source": {
          "name": "Tom's Guide",
          "url": "https://www.tomsguide.com"
        }
      }
    ]
  };

  const [WIDTH, HEIGHT] = [800, 800];
  
  // Variables globales
  
  let titles = null;
  
  // Funciones
  
  const indexTitles = ({articles}) => {
    const titlesArray = articles.map(({title}) => title);
    
    titles = new Titles(titlesArray);
    titles.indexWords();
  }
  
  function preload() {
    const path = null; 
    const successCallback = (response) => {indexTitles(response)}; // Indexa los títulos de la respuesta
    const failureCallback = () => {indexTitles(MOCK)}  // Indexa los títulos del mock
    
    httpGet(null, 'json', false, successCallback, failureCallback);
  }
  
  function setup() {
    createCanvas(WIDTH, HEIGHT);
    
    textSize(48);
    textFont('Helvetica Neue');
  }
  
  function draw() {
    if (titles) { 
      background(titles.backgroundColor);
      
      titles.words.forEach(word => {
        word.render();
        word.animate();
      })
    }
  }
  
  function mousePressed() { // Cuando se hace click
    titles.words.forEach(word => { word.click() }) 
  }
  
  function keyPressed() {
    if (keyCode === 32) { // Cuando se pulsa la barra espaciadora
      titles.nextTitle();
      titles.indexWords(); // Indexa las palabras del siguiente titular
    }
  }
  
  const randomRGBColor = () => {
    const r = Math.round(random(255));
    const g = Math.round(random(255));
    const b = Math.round(random(255));
  
    return `rgb(${r}, ${g}, ${b})`
  };
  
  // Clases
  
  class Titles {
    constructor(titlesArray) {
      this.titlesArray = titlesArray;
      this.totalTitles = titlesArray.length - 1;
      
      this.textColor = randomRGBColor();
      this.backgroundColor = randomRGBColor();
  
      this.words = null; // Palabras del titular actual
      this.i = 0; // Titular actual
    }
  
    indexWords() {
      const wordsArray = this.titlesArray[this.i].split(' ');
      
      this.words = wordsArray.map((word) => new Word(word, this.textColor));
    }
    
    nextTitle() {
      this.i = (this.i < this.totalTitles) ? (this.i + 1) : 0; // Vuelve a empezar cuando llega al final
  
      // Genera un nuevo 'backgroundColor' y 'textColor'
      this.backgroundColor = randomRGBColor();
      this.textColor = randomRGBColor();
    }
  }
  
  class Word {
    constructor(word, textColor) {
      this.word = word;
      this.color = textColor; 
      this.textColor = textColor;
      this.altColor = '#000 ';
  
      this.xOff = random(WIDTH); // Primera coordenada de ruido
      this.yOff = random(HEIGHT); // Segunda coordenada de ruido
      this.x = random(WIDTH); // Posición del eje X
      this.y = random(WIDTH); // Posición del eje Y
    }
  
    click() {
      const distance = dist(mouseX, mouseY, this.x, this.y);
  
      /* Cuando se hace click en una palabra cambia el color a negro. Si
       * se vuelve a hacer click recupera el color original. Así, se
       * pueden destacar palabras para generar un nuevo significado. */
      if (distance < textWidth(this.word)) {
        this.color = (this.color === this.textColor) ? this.altColor : this.textColor;
      }
    }
  
    animate() {
      // Ruido mapeado al canvas
      this.x = map(noise(this.xOff), 0, 1, 0, WIDTH);
      this.y = map(noise(this.yOff), 0, 1, 0, HEIGHT);
    
      this.xOff += 0.001;
      this.yOff += 0.001;
    }
  
    render() {
      fill(this.color)
      text(this.word, this.x, this.y);
    }
  }
  

   