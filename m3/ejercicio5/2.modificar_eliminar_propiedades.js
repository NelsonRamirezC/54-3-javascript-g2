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

//MODIFICAR PROPIEDADES
persona.nombre = persona.nombre.toUpperCase();
persona.apellido = persona.apellido.toUpperCase();

//ELIMINAR PROPIEDADES
delete persona.direccion;

console.log(persona);


