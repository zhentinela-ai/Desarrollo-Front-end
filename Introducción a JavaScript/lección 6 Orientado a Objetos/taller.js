class ElementoInstruccional {
  constructor(identificador, tipo, version) {
    this.identificador = identificador;
    this.tipo = tipo;
    this.version = version;
  }

  generarNombreArchivo() {
    return `COMP18S_${this.identificador}_${this.tipo}_${this.version}.midoc`;
  }
}

var actividad = new ElementoInstruccional(1, "interactiva", "V1");
console.log(actividad.generarNombreArchivo());
var actividad = new ElementoInstruccional(2, "ejercicio", "V2");
console.log(actividad.generarNombreArchivo());
var actividad = new ElementoInstruccional(3, "laboratorio", "V3");
console.log(actividad.generarNombreArchivo());
