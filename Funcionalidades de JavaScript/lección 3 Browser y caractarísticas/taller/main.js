function visitar() {
  var pais = document.getElementById("list").value;
  localStorage.setItem("pais", pais);

  var paisVisitado = document.getElementById("visitado");
  paisVisitado.innerHTML = localStorage.getItem("pais");
  console.log(paisVisitado);
}
