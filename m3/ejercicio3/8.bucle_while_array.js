//SE EJECUTA MIENTRAS SE CUMPLA UNA CONDICIÓN

const frutas = ["Naranja", "Pera", null, "Manzana"];

let index = 0;

while(true){
    let elemento = frutas[index];

    if(elemento){
        console.log(elemento);
    }else {
        break;
    }

    index++;
    
};

console.log("Programa terminado... en índice:", index);