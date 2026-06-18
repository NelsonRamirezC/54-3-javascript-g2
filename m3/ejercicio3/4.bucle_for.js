
// CONTAR NÚMEROS PARES ENTRE EL 0 Y EL 100

let cantidadPares = 0;
let sumaPares = 0;

for(let iterador = 0;iterador <= 100; iterador++){
    //INSTRUCCIONES

    let resto = iterador % 2;

    if(resto == 0){
        cantidadPares++;
        sumaPares += iterador;
    }
};

console.log("Cantidad de pares: ", cantidadPares);
console.log("Suma de pares: ", sumaPares);

