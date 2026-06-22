function sumar(...valores){ // operador rest
    //recibe los valores en formato de array...

    if(valores.length == 0){
        return 0;
    }

    if(valores.some(valor => isNaN(Number(valor)))){
        return "No se puede concretar la suma por valores erroreos.";
    }   

    return valores.reduce((acc, curr) =>  acc + Number(curr), 0);

};

let resultado = sumar(2, 6, 5);
console.log(resultado);



//USO DE OPERADOR SPREAD PARA PASAR MÚLTIPLES VALORES

let arrValores = [3,4,2,6,7,8,10];

let resultadoSumaArr = sumar(...arrValores); //OPERADOR SPREAD

console.log("Resultado suma array:", resultadoSumaArr);
