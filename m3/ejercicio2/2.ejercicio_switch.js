//MENÚ DE OPCIONES CON SWITCH

//Peaje

let montoPago = "camion";

let mensaje = "El valor del peaje :";

switch (montoPago) {
    case "auto":
    case "camioneta":
        console.log(mensaje+ "$1.500");
        break;
    case "moto":
        console.log(mensaje+ "$1.000");
        break;
    case "bus":
    case "camion":
        console.log(mensaje+ "$2.000");
        break;
    default:
        console.log("La opción es inválida. Por favor, seleccione una opción de la lista",);
        break;
}
