function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
};

//AGREGAR MÉTODOS A LOS OBJETOS
Persona.prototype.saludar = function () {
    return "Hola, soy " + this.nombre;
};

let persona1 = new Persona("Carlos", 40);
let persona2 = new Persona("Pedro", 35);

console.log(persona2.saludar());