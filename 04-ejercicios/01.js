// encontrar el numero mayor

// mi solucion 1
// function encontraMayor(a, b) {
//   console.log("Detectemos en número mayor");

//   console.log("los valores ingresados son:" + a + " y " + b);

//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let resultado = encontraMayor(1, 5);
// console.log("El mayor es: " + resultado);

// mi solucion 2
// function encontraMayor(a, b) {
//   console.log("Detectemos cuál es el número mayor");
//   console.log(`los valores ingresados son: ${a} y  ${b}`);

//   // Evaluamos cuál de los casos da como resultado 'true'
//   switch (true) {
//     case a > b:
//       return a;
//     case a < b:
//       return b;
//     default:
//       console.log("Ambos numeros son iguales");
//       return a;
//   }
// }
// let resultado = encontraMayor(1, 5);
// console.log(`El mayor es: ${resultado}`);

// solución de Profesor
function cualEsMayor(a, b) {
  return a > b ? a : b;
}

let mayor = cualEsMayor(10, 5);
console.log(mayor);
