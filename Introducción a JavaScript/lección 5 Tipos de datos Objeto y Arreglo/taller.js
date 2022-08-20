var Judo = {
  deporte: {
    nombre: "Judo",
    origen: "Japón",
  },
  clubes: [
    { dojo: "Sensei VU", cuidad: "Inmaculada" },
    { dojo: "Sensei Sato", cuidad: "Tokio" },
  ],
};

function deporteJudo(Judo) {
  for (var club of Judo.clubes) {
    console.log(
      `Club de ${Judo.deporte.nombre} ${club.dojo}, Cuidad: ${club.cuidad}`
    );
  }
}

deporteJudo(Judo);
