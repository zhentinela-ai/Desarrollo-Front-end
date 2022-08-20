var eventos = [];
var eventosCargados = 0;

function iniciarEventos() {
  for (var i = 1; i < 200; i++) {
    eventos.push({
      nombre: "Evento " + i,
      descripcion: "Esta es la descripción del evento " + i,
    });
  }
}

iniciarEventos();

function cargarEventos() {
  for (var i = eventosCargados; i < eventosCargados+5; i++) {
    var h2 = document.createElement("h2");
    var contenidoNombre = document.createTextNode(eventos[i].nombre);
    h2.appendChild(contenidoNombre);

    var p = document.createElement("p");
    var contenidoDescripcion = document.createTextNode(eventos[i].descripcion);
    p.appendChild(contenidoDescripcion);

    var hr = document.createElement("hr");

    document.getElementById("eventos").appendChild(h2);
    document.getElementById("eventos").appendChild(p);
    document.getElementById("eventos").appendChild(hr);
  }
  eventosCargados += 5;
}
