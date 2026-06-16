let password = "12345678";

//.length con da la el total de caracteres

//VALIDAMOS SI EL PASSWORD TIENE MÍNIMO 8 CARACTERES
if(password.length >= 8 && password.length <= 150){
    console.log("Cumple con condiciones.");
}else {
    console.log("No se cumple con el mínimo / máximo de caracteres.");
}