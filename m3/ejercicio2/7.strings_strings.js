let producto = "Televisor 50 pulgadas Samsung.";

let busqueda = "samshung";

//NORMALIZAMOS TEXTOS
producto = producto.toLowerCase();
busqueda = busqueda.toLowerCase();


if(producto.includes(busqueda)){
    console.log("Producto coincide.");
}else{
    console.log("Producto NO coincide.");
}