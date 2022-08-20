var fila = "    luiS,    BLANCO";
var arreglo = fila.split(",");
var nombre = arreglo[0].trim();
var apellido = arreglo[1].trim();

console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLocaleLowerCase());
