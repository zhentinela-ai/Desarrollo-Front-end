function fechaParaHumanos(fecha, fechaRerencia) {
  var t1 = fecha.getTime() / 1000; // segundos
  var t2 = fechaRerencia.getTime() / 1000; // segundos
  var diferencia;
  diferencia = Math.round(t2 - t1);
  if (diferencia < 1) {
    return "hace 1 segundo";
  }
  if (diferencia < 60) {
    return `hace ${diferencia} segundos`;
  }
  diferencia = Math.round(diferencia / 60);
  if (diferencia < 1) {
    return "hace 1 minuto";
  }
  if (diferencia < 15) {
    return "hace 15 minutos";
  }
  if (diferencia < 60) {
    return "hace 1 hora";
  }
  if (diferencia < 300) {
    return "hace 5 horas";
  }
  if (diferencia < 1440) {
    return "hace x días";
  }
}

var fecha = fechaParaHumanos(new Date(2022,5,1,8,15,150), new Date(2022,5,1,4,16,160))
console.log(fecha);