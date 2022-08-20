// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {
  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json",
  }).done(function (response) {
    eventos = response.eventos;
    var id = location.search.match(/id=(\d)*/)[1];
    evento = eventos.find(function (element) {
      return element.id == id;
    });

    var html = `
                <h2>${evento.nombre}</h2>
                <p>${evento.fecha}</p>
                <p>Lugar: ${evento.lugar}</p
                <p>Descripción: ${evento.descripcion}</p>
                <p>Costo: ${evento.precio}</p>
                <p>Invitados: ${evento.invitados}</p>
                `;
    document.getElementById("evento").innerHTML = html;
  });
  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento
  // var html = `<h2>${evento.nombre}</h2>`;
  //Completa este HTML con los demas atributos del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento
});
