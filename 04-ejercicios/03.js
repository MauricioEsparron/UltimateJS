//  Construir una función que nos permita a nosotros
// poder obtener un elemento por su índice.

/*
indice validar que no sea menor a cero y que el elemento exista
en el array
*/
//manera 1
// function getbyIdx(arr, idx) {
//   if (idx < 0) {
//     return "Elemento no existe";
//   }
//   if (arr.length <= idx) {
//     return "Elemento no existe";
//   }
//   return arr[idx];
// }
// let resultado = getbyIdx([1, 2], 1);
// console.log(resultado);

//manera 2
// function getbyIdx(arr, idx) {
//   if (idx < 0 || arr.length <= idx) {
//     return "Elemento no existe";
//   }
//   return arr[idx];
// }
// let resultado = getbyIdx([1, 2], 1);
// console.log(resultado);

//manera 3
// function getbyIdx(arr, idx) {
//   switch (true) {
//     case idx < 0 || arr.length <= idx:
//       return "Elemento no existe";
//   }
//   return arr[idx];
// }
// let resultado = getbyIdx([1, 2], 1);
// console.log(resultado);

function getbyIdx(arr, idx) {
  return idx >= 0 && arr[idx] !== undefined ? arr[idx] : "Elemento no existe";
}
let resultado = getbyIdx([1, 2], 1);
console.log(resultado);
