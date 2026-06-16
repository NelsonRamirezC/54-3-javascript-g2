let genero = ""; // "m" - "f"; -> "Hombre" - "Mujer"

genero = genero == "m" ? "Hombre" : "Mujer";
//genero = genero == "m" ? "Hombre" : genero == "f" ? "Mujer" : "No definido";

console.log(genero);


// if(genero == "m"){
//     genero = "Hombre";
// }else {
//     genero = "Mujer";
// }