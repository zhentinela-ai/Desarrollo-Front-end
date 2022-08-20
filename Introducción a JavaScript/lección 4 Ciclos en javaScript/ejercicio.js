function minimo(donaciones) {
  return Math.min(...donaciones); 
}

function maximo(donaciones) {
  return Math.max(...donaciones); 
}


function promedio(min, max, donaciones) {
  var suma = 0;
  for (monto of donaciones) {
    if (monto != min && monto != max) {
      suma += monto;
    }
  }
  return  `${max} ${min} ${suma/(donaciones.length - 2)}`
}

var donaciones = [5,1,56,5,46,54,2,14,5,0]

var min = minimo(donaciones)
console.log(min);
var max = maximo(donaciones)
console.log(max);
console.log(promedio(min, max, donaciones));