var arreglo1 = [1, 2, 3, 4, 5];
var arreglo2 = [1, 2, 4, 8];

function double(arreglo) {
  return arreglo.map((x) => {
    return x * 2;
  });
}

function impares(arreglo) {
  return arreglo.filter((x) => {
    return x % 2 !== 0;
  });
}

function tercera(arreglo) {
  var impares = arreglo.filter(x => {
    return x % 2 !== 0;
  });
  var pares = arreglo.filter(x => {
    return x % 2 === 0;
  })
  return [impares.map(x => {
    return x * 2;
  }), pares.map(x => {
    return x / 2; 
  })]
}

var doble1 = double(arreglo1);
console.log(doble1);
var doble2 = double(arreglo2);
console.log(doble2);

var impar1 = impares(arreglo1);
console.log(impar1);
var impar2 = impares(arreglo2);
console.log(impar2);

var tercer1 = tercera(arreglo1);
console.log(tercer1);
var tercer2 = tercera(arreglo2);
console.log(tercer2);
