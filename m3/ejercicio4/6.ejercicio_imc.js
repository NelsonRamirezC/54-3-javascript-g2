`
El Índice de Masa Corporal (IMC) evalúa si una persona tiene un peso saludable para su estatura. Se calcula dividiendo el peso en kilogramos entre la altura en metros elevada al cuadrado, mediante la fórmula:

    IMC = peso / altura^2

Ejemplo práctico:

Si pesas 70 kg y mides 1,70 m:

Calcula el cuadrado de tu altura: 1,70 × 1,70 = 2,89

Divide tu peso entre ese resultado: 70 ÷ 2,89 = 24,22

Tu IMC es 24,22 kg/m².

Rango de IMC
Clasificación:

Menos de 18,5: Bajo peso
18,5 a 24,9: Peso normal
25,0 a 29,9: Sobrepeso
30,0 o más: Obesidad

HASTA LAS: 10:45
`;

// Función para calcular el IMC y evaluar el estado
/**
 * Calcula el Índice de Masa Corporal (IMC) y devuelve un mensaje con la clasificación.
 *
 * Fórmula: IMC = peso (kg) / (altura (m))^2
 *
 * Clasificación:
 * - IMC < 18.5: Bajo peso
 * - 18.5 ≤ IMC ≤ 24.9: Peso normal
 * - 25.0 ≤ IMC ≤ 29.9: Sobrepeso
 * - IMC ≥ 30.0: Obesidad
 *
 * @param {number} peso - Peso en kilogramos.
 * @param {number} altura - Altura en metros.
 * @returns {string} Mensaje con el IMC redondeado a 2 decimales y su clasificación.
 * @example
 * // devuelve "Tu IMC es 24.22: Peso normal."
 * calcularIMC(70, 1.7);
 */
function calcularIMC(peso, altura) {
    // 1. Calcular el IMC (peso dividido por la altura al cuadrado)
    let imc = peso / (altura * altura);

    // Redondear a dos decimales para que se vea limpio (ej: 24.22)
    imc = imc.toFixed(2);

    let mensaje = "";

    // 2. Evaluar el rango según la tabla
    if (imc < 18.5) {
        mensaje = `Tu IMC es ${imc}: Bajo peso.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = `Tu IMC es ${imc}: Peso normal.`;
    } else if (imc >= 25.0 && imc <= 29.9) {
        mensaje = `Tu IMC es ${imc}: Sobrepeso.`;
    } else {
        mensaje = `Tu IMC es ${imc}: Obesidad.`;
    }

    //RETORNAMOS LA RESPUESTA
    return mensaje;
}

// --- EJEMPLO DE USO ---
// Si una persona pesa 70 kg y mide 1.70 m:
let respuestaIMC = calcularIMC(70, 1.7);

console.log(respuestaIMC);

