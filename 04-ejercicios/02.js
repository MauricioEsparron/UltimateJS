/*
2: Crear una finción que imprima el nombre 
   de la resolución según los valores que 
   se ingresen

Nombre: ancho x alto
8K 7680 x 4320
4K 3840 x 2160
WQHD 2560 x 1440
FHD 1920 x 1080
HD 1280 x 720
*/

// Mi solución 1 (vi que no era una manera del todo correcta porque 'return console.log' devuelve 'undefined')
// function nombreResolucion(ancho, alto) {
//   switch (true) {
//     case ancho >= 7680 && alto >= 4320:
//       return console.log("8K");
//     case ancho >= 3840 && alto >= 2160:
//       return console.log("4K");
//     case ancho >= 2560 && alto >= 1440:
//       return console.log("WQHD");
//     case ancho >= 1920 && alto >= 1080:
//       return console.log("FHD");
//     case ancho >= 1280 && alto >= 720:
//       return console.log("HD");
//   }
// }
// let nombre = nombreResolucion(7680, 4320);

// Mi solución 2 (Forma correcta: la función retorna un texto limpio que se puede guardar y reutilizar)
function nombreResolucion(ancho, alto) {
  switch (true) {
    case ancho >= 7680 && alto >= 4320:
      return "8K";
    case ancho >= 3840 && alto >= 2160:
      return "4K";
    case ancho >= 2560 && alto >= 1440:
      return "WQHD";
    case ancho >= 1920 && alto >= 1080:
      return "FHD";
    case ancho >= 1280 && alto >= 720:
      return "HD";
  }
}

let nombre = nombreResolucion(1280, 720);
console.log(nombre); // Imprime: HD
