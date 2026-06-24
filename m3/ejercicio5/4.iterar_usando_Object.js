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

//OBTENER LAS LLAVES
const llaves = Object.keys(persona);
console.log(llaves);

//OBTENER LOS VALORES
const valores = Object.values(persona);
console.log(valores);

//OBTENER LAS ENTRADAS PAR CLAVE-VALOR
const entradas = Object.entries(persona);

for (const entrada of entradas) {
    // console.log(entrada[0], ":", entrada[1]);

    //MEJORANDO CON DESTRUCTURING
    let [llave, valor] = entrada;
    console.log(llave, ":", valor);
}