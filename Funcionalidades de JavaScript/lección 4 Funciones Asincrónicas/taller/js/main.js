function validar(form) {

  var expresionRegular = new RegExp("^[0-9]")
  
  if (form.nombre.value.trim().length == 0) {
    document.getElementById("errores").innerHTML = "El nombre es obligatorio"
  } else if (form.nombre.value.trim().length < 3) {
    document.getElementById("errores").innerHTML = "Debe tener más de dos carácteres"
  } else {
    document.getElementById("errores").innerHTML = ""    
  }
  
  if (form.nombre.value.trim().match(expresionRegular)) {
    document.getElementById("errores").innerHTML = "No debe contener números"
  } 

}