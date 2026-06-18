const frutas = ["Naranja", "Pera", "Manzana"];

console.log(frutas);
console.log("Tipo de dato:", typeof(frutas)); // ouput: object

console.log("Índices de un array:");
console.table(frutas);

console.log("Cantidad elementos;", frutas.length);

console.log("Primer elemento:", frutas[0]); //output: naranja

let ultimoIndice = frutas.length-1;
console.log("Último elemento:", frutas[ultimoIndice]); //output: manzana

//MODIFICAR LOS VALORES DE UN ARREGLO

frutas[0] = "Uva";
console.log("Frutas: ", frutas);