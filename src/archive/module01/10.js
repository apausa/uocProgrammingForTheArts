function setup() {
    let x = 0;
  	let y = 2;

    x = x + 1; // x = 1
    console.log(x)
    x = 3; // x = 3
    console.log(x)
    x++; // x = 4
    console.log(x)
    y = 2 + 3 * 2; // x = 8
    console.log(y)
    y = 0; // y = 0
    console.log(y)
    y = (2 + 3) * 2; // y = 10
    console.log(y)
    x = 0; // x = 0
    console.log(x)
    x = 10/4; // x = 2.5
    console.log(x)
    x = 3; // x = 3
    console.log(x)
    x += 2; // x = 5
    console.log(x)

    for ( x = 0; x < 5; x++){
         console.log(x)
       // 1a ejecución x = 0
       // 2a ejecución x = 1
       // 3a ejecución x = 2
       // 4a ejecución x = 3
       // 5a ejecución x = 4
    }

    for (x = 10; x > 0; x--){
       console.log(x)
       // 1a ejecución x = 10
       // 2a ejecución x = 9
       // 3a ejecución x = 8
       // 4a ejecución x = 7
       // 5a ejecución x = 6
       // 6a ejecución x = 5
       // 7a ejecución x = 4
       // 8a ejecución x = 3
       // 9a ejecución x = 2
       // 10a ejecución x = 1
    }

    for (x = 1; x < 1; x++){
       console.log(x)
       // No entra, porque 'x' no es menor que 1. 
    }
}