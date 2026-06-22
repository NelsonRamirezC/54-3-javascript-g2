/**
 * Suma dos valores convertidos a número.
 *
 * Convierte los argumentos a `Number` y devuelve su suma.
 * Si no se pasan argumentos, ambos se consideran 0.
 *
 * @param {number|string} numero1 - Primer valor a sumar (por defecto 0).
 * @param {number|string} numero2 - Segundo valor a sumar (por defecto 0).
 * @returns {number} Resultado de la suma de los dos valores.
 * @example
 * // devuelve 4
 * sumar(1, 3);
 */
function sumar(numero1 = 0, numero2 = 0){
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado = numero1 + numero2;

    return resultado;
};

let resultado = sumar(1,3);
console.log("Resultado suma:", resultado);