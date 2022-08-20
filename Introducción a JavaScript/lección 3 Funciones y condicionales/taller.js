var noVegetarianos = ["Bisteck de la casa", "Robalo frito", "Pechuga Hawaiana"];
var vegetarianos = ["Toffu", "Ensalada de verduras", "Frijoles"];
var tipoReceta = false;

function Receta(tipoMenu, recetas) {
    if (tipoMenu) {
        return `Vegetarianos
                Recetas para vegetarianos: ${recetas}`
    } else {
        return `No vegetarianos
                Recetas para no vegetarianos: ${recetas}`
    }
}

console.log("Menús: " + Receta(tipoReceta, noVegetarianos))