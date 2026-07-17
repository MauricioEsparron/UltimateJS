/*
Crear algoritmo que devuelva cantidad
de números positivos de un array
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let cant = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      cant++;
    }
  }
  return cant;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
