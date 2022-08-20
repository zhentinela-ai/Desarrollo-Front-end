var azucar = "Azúcar";
var harina = "Harina";
var huevos = "Huevos";
var sal = "Sal";
var cocoa = "Cocoa";

var nombre = "Torta de Chocolate"

function Lista(ing1,ing2,ing3,ing4,ing5,nombre) {
    return `Nombre de la receta: ${nombre}
            Ingredientes: 
            ${ing1}
            ${ing2}
            ${ing3}
            ${ing4}
            ${ing5}`;
}

var receta = Lista(azucar,harina,huevos,sal,cocoa,nombre);
console.log(receta)