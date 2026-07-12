let animales = ["chanchito", "caballito", "perrito", "gatito"];

console.log(animales); // ["chanchito", "caballito", "perrito", "gatito"]

console.log(animales[0]); // chanchito
console.log(animales[1]); // caballito
console.log(animales[2]); // perrito
console.log(animales[3]); // gatito

console.log("---------------------");

animales[2] = "perrito feliz"; // Cambiando el valor del índice 2

console.log(animales); // ["chanchito", "caballito", "perrito feliz", "gatito"", "pajarito""]

console.log("---------------------");

animales[10] = "pajarito"; // Agregando un nuevo valor en el índice 10

console.log(animales); // ["chanchito", "caballito", "perrito feliz", "gatito"", "pajarito""]

console.log("---------------------");

console.log(animales.length); // tamaño de la lista

console.log("---------------------");

animales.push("conejo"); // Agregando un nuevo valor al final de la lista

console.log(animales); // ["chanchito", "caballito", "perrito feliz", "gatito"", "pajarito"", "conejo""]

console.log("---------------------");

console.log(animales[3]);
