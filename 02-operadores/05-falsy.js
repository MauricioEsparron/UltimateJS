//short-circuit evaluation

// Falso
// false
// 0
// -0
// ""
// null
// undefined
// NaN

// Verdadero
// true
// {}
// []
// 42
// "0"
// "false"
// new Date()
// -42
// 3.14
// -3.14
// Infinity
// -Infinity

let nombre = "";
let username = nombre || "Invitado";
console.log(username); // "Invitado"

function fn1() {
  console.log("soy funcion 1");
  return false;
}

function fn2() {
  console.log("soy funcion 2");
  return true;
}

let x = fn1() && fn2(); // "soy funcion 1" "soy funcion 2"
