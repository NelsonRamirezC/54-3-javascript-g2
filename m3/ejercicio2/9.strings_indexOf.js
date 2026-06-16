let run = "21000000-1";

let indiceSeparador = run.indexOf("-");

console.log("Índice separador:", indiceSeparador); // OUTPUT: 10


let numeroRun = run.slice(0, indiceSeparador);

//REEMPLAZAMOS LOS PUNTOS DE SEPARACIÓN DE MILES POR NADA
numeroRun = numeroRun.replaceAll(".", "");

let dv = run.slice(indiceSeparador+1);

console.log("Número run:", numeroRun);
console.log("Digito Verificador:", dv);