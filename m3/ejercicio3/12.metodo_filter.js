const valores = [1, 20, 12, 14, 7, 5, 3, 0, 3, 50, 100];

//FILTAR LOS VALORES MENORES O IGUAL (<=) 20

const filtradosMenorIgual20 = valores.filter((valor) => valor <= 20);

console.log("Valores <= 20:", filtradosMenorIgual20);

//FILTAR LOS VALORES MAYORES (>) A 20

const filtradosMayoresQue20 = valores.filter((valor) => valor > 20);

console.log("Valores > 20:", filtradosMayoresQue20);


//FILTAR LOS VALORES MAYORES (>) A 100

const filtradosMayoresQue100 = valores.filter((valor) => valor > 100);

if(filtradosMayoresQue100.length > 0){
    console.log("Valores > 100:", filtradosMayoresQue100);
}else {
    console.log("No existen elementos cuyo valor sea mayor a 100");
}
