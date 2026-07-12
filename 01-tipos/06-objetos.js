//Personaje de TV
let nombre = "Tanjirou Kamado";
let anime = "Demon Slayer";
let edad = 15;

let personaje = {
  nombre: "Tanjiro",
  anime: anime,
  edad: edad,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 16;

personaje["edad"] = 17;

console.log(personaje);

delete personaje.anime;

console.log(personaje);
