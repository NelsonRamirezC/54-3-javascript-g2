//OBJETO LITERAL
const persona = {
    id: 1,
    nombre: "Pedro",
    apellido: "Soto",
    edad: 35,
    email: "pedro@gmail.com",
    vip: false,
    hobbies: ["bicicleta", "correr", "jugar Lol"],
};

//APLICANDO DESTRUCTURING EN OBJETOS
let {nombre, apellido} = persona;

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);

//DESTRUCTURING CON VARIABLE DE DISTINTO NOMBRE A PROPIEDAD
let {email:correo} = persona;
console.log(correo);