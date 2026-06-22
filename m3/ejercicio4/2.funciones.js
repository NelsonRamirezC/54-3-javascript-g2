function sumar(numero1 = 0, numero2 = 0){ //valores defecto
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado = numero1 + numero2;
    if(isNaN(resultado)){
        return "Se han ingresado valores que no corresponden a números.";
    }

    return resultado;
};

let resultado = sumar(5, 7);
console.log("Resultado suma:", resultado);

