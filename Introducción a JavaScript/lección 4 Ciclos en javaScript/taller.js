var listaCanciones = ["Some nights", "Great big storm", "Nothing without love", "What a wonderful World", "Stand by me"];

function VerListaCanciones(lista) {
  for (cancion of lista) {
    console.log(cancion);
  }
}

function VerListaCanciones(lista) {
  for(var i=0; i < lista.length; i++){
    console.log(lista[i]);
  }
}

console.log("Mi lista de canciones favoritas:")
VerListaCanciones(listaCanciones)
