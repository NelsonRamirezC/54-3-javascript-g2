const persona = {
    id: 1,
    nombre: "Pedro",
    apellido: "Soto",
    edad: 35,
    email: "pedro@gmail.com",
    vip: false,
    hobbies: ["bicicleta", "correr", "jugar Lol"],
};

// Creamos el manejador (handler) para el Proxy
const manejador = {
    set(target, propiedad, valor) {
        // 1. Bloquear la adición de nuevas propiedades
        if (!(propiedad in target)) {
            throw new Error(
                `No se permite agregar la propiedad nueva: "${propiedad}"`,
            );
        }

        // 2. Validar que 'nombre' sea un string válido (no vacío y solo letras/espacios)
        if (propiedad === "nombre") {
            const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (
                typeof valor !== "string" ||
                valor.trim() === "" ||
                !regexNombre.test(valor)
            ) {
                throw new Error(
                    "El nombre no es válido. Debe ser un texto sin números ni caracteres especiales.",
                );
            }
        }

        // 3. Validar que 'apellido' sea un string válido
        if (propiedad === "apellido") {
            const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (
                typeof valor !== "string" ||
                valor.trim() === "" ||
                !regexApellido.test(valor)
            ) {
                throw new Error(
                    "El apellido no es válido. Debe ser un texto sin números ni caracteres especiales.",
                );
            }
        }

        // Si pasa todas las validaciones, se asigna el valor
        target[propiedad] = valor;
        return true; // Indica que la operación fue exitosa
    },
};

// Creamos el proxy protector
const personaProtegida = new Proxy(persona, manejador);

personaProtegida.nombre = "Luis";

console.log(personaProtegida);