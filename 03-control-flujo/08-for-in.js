let user = {
  id: 1,
  name: "Chahcito feliz",
  age: 25,
};

for (let prop in user) {
  console.log(prop, user[prop]);
}

console.log("-------------------------");

let animales = ["chanchito feliz", "Dragon", "Canguro"];
for (let indice in animales) {
  console.log(indice, animales[indice]);
}
