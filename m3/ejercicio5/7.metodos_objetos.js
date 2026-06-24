//OBJETO LITERAL
const persona = {
    id: 1,
    nombre: "Pedro",
    apellido: "Soto",
    fechaNacimiento: "01/03/1992",
    email: "pedro@gmail.com",
    vip: false,
    hobbies: ["bicicleta", "correr", "jugar Lol"],
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    hobbiesStr(separador = ", "){
        return this.hobbies.join(separador);
    },
};

console.log(`Hola ${persona.nombreCompleto()}`);

console.log("Hobbies:", persona.hobbiesStr(" | "));