/* 
Crear algoritmo que imprima números impares
*/

// solución 1
// function numImpar() {
//   for (i = 1; i <= 10; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }
// numImpar();

// solucion 2

//la clave está en el número inicial.
// La regla matemática dice: Impar + Par = Impar.
// Como sumas 2 (par) a partir del 1 (impar),
// el resultado siempre será impar
// function numImpar() {

//   for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
//   }
// }
// numImpar();

// solucion del profesor

let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log("impar", i);
  }
  i++;
}
