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

//USAMOS FOR IN PARA RECORRER UN OBJETO
for (const llave in persona) {
    console.log(llave, ":", persona[llave]);
}