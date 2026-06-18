const frutas = ["Naranja", "Pera", "Manzana"];


function crearMap(lista, callback){

    let array = [];

    for (const element of lista) {
        array.push(callback(element));
    };

    return array;
}

function transformarMay(valor) {
    return valor.toUpperCase();
}

function transformarMin(valor) {
    return valor.toLowerCase();
}

const frutasMayusculas = crearMap(frutas, transformarMay);
console.log(frutasMayusculas);

const frutasMinusculas = crearMap(frutas, transformarMin);
console.log(frutasMinusculas);