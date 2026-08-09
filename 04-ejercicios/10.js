/**
 *
 * Crear array de longitu N, y que sus elementos sean
 * numeros de 1 hasta N
 */

let longitud = 7;

function crearArray(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

let resultado = crearArray(longitud);
console.log(resultado); // [1,2,3,4,5,6,7]
