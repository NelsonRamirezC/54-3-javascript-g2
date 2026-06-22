function sumar(...valores){ //AQUÍ SE LLAMA REST

    let total = 0;

    for (const valor of valores) {
        total += valor;
    }

    return total;
};

console.log("Suma1:", sumar(2,3,4));
console.log("*".repeat(25));

console.log("Suma2:", sumar(6,8,20,26,70));
console.log("*".repeat(25));
console.log("*".repeat(25));
console.log("Enviar valores desde un array usando spread:")

const arrayValores = [2,5,6];

console.log("Suma valores array:", sumar(...arrayValores)); //AQUÍ SE LLAMA SPREAD