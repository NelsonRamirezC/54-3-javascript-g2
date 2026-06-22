const clientes = [
    {id:1, nombre: "Pedro", apellido: "Figueroa"},
    {id:2, nombre: "Marta", apellido: "Villa"},
    {id:3, nombre: "José", apellido: "Campos"}
];

function convertirACsv(lista) {

    let lineas = "";

    for (const elemento of lista) {
        let valoresArr = Object.values(elemento);
        lineas += valoresArr.join(";") + "\n";
    }

    return lineas;
    
};

console.log(convertirACsv(clientes));