const estudiantes = [
    {id:1, nombre:"Marta", apellido:"Soto", notas: [4.5, 5.8, 6.8]},
    {id:2, nombre:"Miguel", apellido:"García", notas: [6.3, 7.0, 5.5]},
    {id:3, nombre:"Juana", apellido:"Romero", notas: [5.5, 7.0, 6.9]},
];


function calcularPromedio(valores = []){
    let accvalores = 0;

    for (const nota of valores) {
        accvalores += nota;
    }

    let promedio = accvalores / valores.length;

    return promedio;
};


function imprimirEstudiantes(estudiantes = []){

    for (const estudiante of estudiantes) {

        console.log("ID Estudiante:", estudiante.id);
        console.log("Datos personales:");
        console.log("Nombre:", estudiante.nombre);
        console.log("Apellido:", estudiante.apellido);
        console.log("Cantidad notas:", estudiante.notas.length);
        console.log("Notas:", estudiante.notas.join(" | "));
        let promedio = calcularPromedio(estudiante.notas);
        console.log("Promedio notas:", promedio.toFixed(2));

        console.log("=".repeat(50));
        
    }
};

function estudiantesConHonores(estudiantes = []){

    //LOS ESTUDIANTES CUYO PROMEDIO SEA >= 6.2 SERÁN GRADUADOS CON HONORES
    const limiteHonores = 6.2;
    
    let estudiantesConHonores = estudiantes.filter(estudiante => calcularPromedio(estudiante.notas) >= limiteHonores );

    return estudiantesConHonores;
};

function main(){
    console.log("Listado de estudiantes con promedio:");
    imprimirEstudiantes(estudiantes);

    console.log("Listado de estudiantes con honores:");
    let resultadoEstudiantesHonores = estudiantesConHonores(estudiantes);

    if(resultadoEstudiantesHonores.length > 0){
        imprimirEstudiantes(resultadoEstudiantesHonores);
    }else {
        console.log("NO HAY ESTUDIANTES QUE CUMPLAN EL REQUISITO DE GRADUARSE CON HONORES.")
    }
}
main();