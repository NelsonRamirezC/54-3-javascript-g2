let codigoProducto = "000-1234";

//OBTENEMOS UN EXTRACTO DEL STRING COMENZANDO EN EL ÍNDICE 0 HASTA EL ÍNDICE 2
//CONSIDERAR QUE ÍNDICE DE FIN NO ESTÁ INCLUIDO, ES 1 MENOS
let codCategoria = codigoProducto.slice(0, 3);

let codProducto = codigoProducto.slice(4);

console.log("Código categoría:", codCategoria);
console.log("Código producto:", codProducto);

