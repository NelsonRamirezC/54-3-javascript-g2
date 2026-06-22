const persona = {
    nombre: "Pedro",
    apellido: "Godoy",
    "fecha-nacimiento": "02/03/2000",
    run: "1-1",
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

//ACCEDER A LOS VALORES A TRAVÉS DE LA NOTACIÓN DE PUNTO
console.log("Nombre: ", persona.nombre);
console.log("Apellido: ", persona.apellido);
console.log("Nombre completo:", persona.nombreCompleto());

//ACCEDER A LOS VALORES  A TRAVÉS DE LA NOTACIÓN DE CORCHETES []

console.log("Nombre usando []: ", persona["nombre"]);
console.log("Fecha nacimiento usando []", persona["fecha-nacimiento"]);
