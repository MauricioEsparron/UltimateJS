/*
Crear algoritmo que devuelva número 
menor y mayor de un array
*/

// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr) {
//   let menor = array[0];
//   let mayor = array[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < menor) {
//       menor = arr[i]; // actualiza si encuentra un valor menor
//     }
//     if (arr[i] > mayor) {
//       mayor = arr[i]; // actualiza si encuentra un valor mayor
//     }
//   }
//   return { menor, mayor }; // devolvemos ambos en un objeto
// }
// let numeros = getMenorMayor(array);
// console.log(numeros);

//metodo del profesor
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  for (let numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);
