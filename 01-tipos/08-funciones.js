function saludar() {
  console.log("Hola Mundo");
}

saludar();

function despedir(nombre) {
  return `Adiós ${nombre}`;
}

const despedida = despedir("Max");
console.log(despedida);

function sumar() {
  return 2 + 2;
}

// let resultado = sumar(); // no es necesario esto para mostrar el resultado, pero es una buena práctica para guardar el valor de retorno en una variable y luego usarla.
//console.log(resultado);
console.log(sumar());
