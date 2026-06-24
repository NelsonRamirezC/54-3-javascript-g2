//OBJETO LITERAL
const persona = {
    id: 1,
    nombre: "Pedro",
    apellido: "Soto",
    edad: 35,
    email: "pedro@gmail.com",
    vip: false,
    hobbies: ["bicicleta", "correr", "jugar Lol"],
    direccion: {
        calle: "Calle 1",
        numero: "A-56",
        comuna: "Macul",
        ciudad: "Santiago",
        region: "Metropolitana",
    },
};

console.log(persona);

//ACCEDER A LOS DATOS DE UN OBJETO

//1. NOTACIÓN DE PUNTO
console.log("NOTACIÓN DE PUNTO:");
console.log("Nombre:", persona.nombre);
console.log("Apellido:", persona.apellido);
console.log("Ciudad:", persona.direccion.ciudad);

console.log("*".repeat(50));
//2. NOTACIÓN DE CORCHETES []
console.log("NOTACIÓN DE CORCHETES []");
console.log("Nombre:", persona["nombre"]);
console.log("Apellido:", persona["apellido"]);
console.log("Ciudad:", persona["direccion"]["ciudad"]);
