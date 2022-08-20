function stringValido(string, largo = null) {
  if (largo != null) {
    if (string.trim().length > largo) {
      return true;
    } else {
      return false;
    }
  } else {
    return "No se valida la longitud, falta el valor 'largo'";
  }
}

function fechaValida(fecha, minimaFecha) {
  if (minimaFecha != null) {
    if (fecha >= minimaFecha) {
      return true;
    } else {
      return false;
    }
  } else {
    return "No se valida la longitud, falta el valor 'Fecha mínima'";
  }
}

function eventoValido(evento) {
  nombre = stringValido(evento.nombre, 3);
  descripcion = stringValido(evento.descripcion, 10);
  fecha = fechaValida(evento["fecha"], new Date(2018, 1, 1));
  if (nombre == true && fecha == true && descripcion == true) {
    return true;
  } else {
    return false;
  }
}

function Evento(nombre, descripcion, fecha) {}

var evento = {
  nombre: "Grado universitario",
  descripcion: "Graduación de la carrera Ingenería en Control Electrónico",
  fecha: new Date(2022, 8, 21),
};

console.log(eventoValido(evento));
