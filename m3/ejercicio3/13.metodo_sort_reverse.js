//MÉTODO SORT

//CASO 1 -> string sin tildes, sin ñ (pensando en el inglés)
const frutas = ["Naranja", "Pera", "banana"];
console.log(frutas.sort());

//CASO 2 -> orden de números
var numeros = [1,5,55,11,12,13,2,57,8,9,19,91];
console.log(numeros.sort());

//SOLUCIONES
//SOLUCIÓN AL CASO 1
const items = ["réservé", "premier", "communiqué", "Café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b, "es"));
console.log(items);


//SOLUCIÓN AL CASO 2
var numeros = [1,5,55,11,12,13,2,57,8,9,19,91];
console.log("Números por defecto ASC:", numeros.sort((a, b) => a - b));
console.log("Números DESC: ", numeros.reverse());
