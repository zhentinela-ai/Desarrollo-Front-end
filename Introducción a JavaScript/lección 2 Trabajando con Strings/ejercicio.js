function encabezadoEvento(nombreEvento, lugarEvento) {
  return `Evento: ${nombreEvento}. Lugar: ${lugarEvento}`;
}

function limpiarNombreParticipante(nombre, apellido) {
  return `${apellido.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
}

evento1 = encabezadoEvento("Intercambio de libros", "Biblioteca");
evento2 = encabezadoEvento("Lectura de Poemas", "Sala A");

console.log(evento1);
console.log(evento2);

participante1 = limpiarNombreParticipante("     Luis", "  Castro  ");
participante2 = limpiarNombreParticipante("     AnA", "  MENDEZ  ");

console.log(participante1);
console.log(participante2);