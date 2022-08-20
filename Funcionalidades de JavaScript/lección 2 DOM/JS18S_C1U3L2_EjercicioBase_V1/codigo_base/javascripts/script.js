function validar(formulario) {
  if (formulario.nombre.value.trim().length > 3) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    return false;
  }

  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value.trim())) {
    document.getElementById("errorEmail").innerText = "Correo invalido";
    formulario.email.value;
    return false;
  }

  alert("Datos enviados");

  return true;
}
