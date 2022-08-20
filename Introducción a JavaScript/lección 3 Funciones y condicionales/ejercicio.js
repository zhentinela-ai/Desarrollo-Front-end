function Saludos(nombre, apellido, género, evento, minutosQueFaltan) {
  var momento = null;

  if (minutosQueFaltan < 60 * 24) {
      momento = "hoy";
  } else if (minutosQueFaltan < 60 * 24 * 2) {
      momento = "mañana";
  } else {
      momento = "pronto";
  }

  switch (género) {
    case "MASCULINO":
      return `Bienvenido ${nombre.trim().toUpperCase()} ${apellido
        .trim()
        .toUpperCase()}, recuerda ${momento} el evento (${evento})`;
      break;
    case "FEMENINO":
      return `Bienvenida ${nombre.trim().toUpperCase()} ${apellido
        .trim()
        .toUpperCase()}, recuerda ${momento} el evento (${evento})`;
      break;
  }
}

var saludo = Saludos("    LUIS", "perez", "MASCULINO", "Película", 600);
console.log(saludo);
var saludo = Saludos("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500);
console.log(saludo);
var saludo = Saludos(
  "    PEDRO  ",
  "Gil",
  "MASCULINO",
  "Juego de Baloncesto",
  5000
);
console.log(saludo);
