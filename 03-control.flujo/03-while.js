// cuales son los numeros pares

// let i = 0;
// while (i < 10) {
//   i++;
// }
// console.log("Fuera del while");

//manera 1
let num = 10;
let u = 1;

while (u <= num) {
  if (u % 2 === 0) {
    // Evaluamos "u", no "num"
    console.log("Número par: " + u);
  }
  u++; // El incremento va al final para evaluar el número actual
}
console.log("Fuera del while");

console.log("----------------------");

//manera 2
let i = 0;
while (i < 10) {
  if (i % 2 == 0) {
    console.log("Número par: " + i);
  }
  i++;
}
console.log("Fuera del while");
