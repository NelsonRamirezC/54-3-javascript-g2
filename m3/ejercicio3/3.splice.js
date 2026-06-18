const diasSemana = ["Lunes", "Martes", "Miércoles", "Juves", "Viernes"];

//.splice() -> PERMITE ELIMINAR UN ELEMENTO Y RELIZAR UN REEMPLAZO
//PRIMER ARGUMENTO: ÍNDICE INICIAL
//SEGUNDO ARGUMENTO: CANTIDAD ELEMENTOS A ELIMINAR (0 SI NO DE DESEA ELIMINAR)
//TERCER ARGUMENTO (OPCIONAL): AGREGAR 1 O N VALORES EN SU REEMPLAZO, DESPLAZANDO EL RESTO A LA DERECHA
diasSemana.splice(3, 1, "Jueves");
console.log(diasSemana);

diasSemana.splice(5, 0, "Sábado", "Domingo");
// diasSemana.push("Sábado", "Domingo");
console.log(diasSemana);