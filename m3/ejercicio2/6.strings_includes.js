let texto = "Esto es un documento que trata sobre JavaScript";

//NORMALIZAMOS EL TEXTO A MINÚSCULAS
texto = texto.toLowerCase();

if(texto.includes("javascript")){
    console.log("Texto de JavaScript");
}else{
    console.log("Descartado, no trata de JavaScript");
}