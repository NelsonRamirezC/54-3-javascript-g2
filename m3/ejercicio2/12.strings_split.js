let dato = "Pedro|Soto|45|pedro@gmail.com";

let valores = dato.split("|");

let nombre = valores[0];
let apellido = valores[1];

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);

console.table(valores);
