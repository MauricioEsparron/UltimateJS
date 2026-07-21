/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Chanchito",
  },
];

// ejemplo de lo que debería imprimir
let pares = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }],
];

// mi solución
// function toPairs(arr) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     let pos = arr[i];
//     pairs.push([pos.id, pos]);
//   }
//   return pairs;
// }
// let resultado = toPairs(array);
// console.log(resultado);

//solucion del profesor
function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}
let resultado = toPairs(array);
console.log(resultado);
