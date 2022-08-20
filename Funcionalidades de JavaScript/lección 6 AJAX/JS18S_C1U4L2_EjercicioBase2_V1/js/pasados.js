// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json",
  }).done(function (resultados) {
    var eventos = resultados.eventos;
    var fechaReferencia = resultados.fechaActual;

    var eventosPasados = eventos.filter(function (element) {
      return element.fecha < fechaReferencia;
    });

    var eventosOrdenados = eventosPasados.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
      return -1;
    });
    console.log(eventosOrdenados);

    var html = "";

    for (var i = 0; i < eventosPasados.length; i++) {
      html += `
              <h2>${eventosOrdenados[i].nombre}</h2>
              <p>${eventosOrdenados[i].fecha}</p>
              <p>Lugar: ${eventosOrdenados[i].lugar}</p
              <p>Descripción: ${eventosOrdenados[i].descripcion}</p>
              <p>Costo: ${eventosOrdenados[i].precio}</p>
              <p>Invitados: ${eventosOrdenados[i].invitados}</p>
              `;
    }

    document.getElementById("pasados").innerHTML = html;
  });

  //Guarda el resultado en variables

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas recientes primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado
});
