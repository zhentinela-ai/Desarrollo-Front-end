function phoneNumber(string) {
  // stringValido = new RegExp("^[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9]")
  stringValido = new RegExp("/^([^-]*)/")
  var result = string.match(stringValido); 
  if (result !== null){
      return true
  } else {
      return false
  }
}

var validar = phoneNumber("123-1212-321")
console.log(validar)