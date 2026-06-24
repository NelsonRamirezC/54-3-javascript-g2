const participantes = ["Juan", "Carla", "Diego", "Miguel", "Carlos"];


//DESTRURING DE ARRAY
let [primerLugar, segundoLugar, ...resto] = participantes;

console.log("Primer lugar:", primerLugar);
console.log("Segundo lugar:", segundoLugar);

console.log("Resto:", resto);