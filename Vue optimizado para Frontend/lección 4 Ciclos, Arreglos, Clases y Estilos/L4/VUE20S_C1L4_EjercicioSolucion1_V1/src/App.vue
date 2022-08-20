<template>
  <div id="app">
    <main>
      <header id="cabezera">
        <img class="icono-cabezera" src="../public/assets/icon_bnr.png">
        <span class="titulo-cabezera"> Eliminatorias CONMEBOL Qatar</span>
      </header>
      <div id="Menu">
        <div ref="barraNavegacion" class="bm-menu">
          <nav class="bm-item-list">
            <a :class="{bmItemListSelected: fechas[0].mostrar}" @click="mostrarFecha1()">
              <span>Fecha 1</span>
            </a>
            <a :class="{bmItemListSelected: fechas[1].mostrar}" @click="mostrarFecha2()">
              <span>Fecha 2</span>
            </a>
            <a :class="{bmItemListSelected: fechas[2].mostrar}" @click="mostrarFecha3()">
              <span>Fecha 3</span>
            </a>
            <a :class="{bmItemListSelected: fechas[3].mostrar}" @click="mostrarFecha4()">
              <span>Fecha 4</span>
            </a>
            <a :class="{bmItemListSelected: !mostrarResultado}" @click="mostrarTabla()">
              <span>Tabla de posiciones</span>
            </a>
          </nav>
          <span
            class="bm-cross-button cross-style"
            @click="cerrarMenu"
            :class="{ hidden: !iconoCerrar }"
          >
            <span
              class="bm-cross"
              :style="{
                position: 'absolute',
                width: '3px',
                height: '14px',
                transform: 'rotate(45deg)',
              }"
            >
            </span>
            <span
              class="bm-cross"
              :style="{
                position: 'absolute',
                width: '3px',
                height: '14px',
                transform: 'rotate(-45deg)',
              }"
            >
            </span>
          </span>
        </div>
        <div
          ref="bmBurgerButton"
          class="bm-burger-button"
          @click="abrirMenu"
          :class="{ hidden: !iconoMenu }"
        >
          <span
            class="bm-burger-bars line-style"
            :style="{ top: 20 * (index * 2) + '%' }"
            v-for="(x, index) in 3"
            :key="index"
          ></span>
        </div>
      </div>
      <div class="cuerpo" id="cuerpo">
        <div id="resultados" v-show="mostrarResultado">
          <span class="titulo-cuerpo"> Resultados</span>
          <div class="fecha" v-for="fecha in fechas" :key="fecha" :id="fecha.id" v-show="fecha.mostrar">
            <div>
              <span class="subtitulo-cuerpo"> Fecha {{fecha.id}}</span>
              <img @click="editarFecha(1)" class="icono-editar" v-show="!fecha.editando" src="../public/assets/icono_editar.png">
            </div>
            <div v-show="!fecha.editando">
              <div class="resultado" v-for="(resultado) in fecha.resultados" :key="resultado">
                  <div class="izquierda">
                    <div class="equipos">
                      <div><span class="titulo-resultado" :class="{empate: resultado[0].esEmpate, ganador: resultado[0].localEsGanador, perdedor: !resultado[0].localEsGanador && !resultado[0].esEmpate }" v-text="resultado[0].local + resultado[0].equipoLocal"></span></div>
                      <div><span class="titulo-resultado" :class="{empate: resultado[0].esEmpate, ganador: !resultado[0].localEsGanador, perdedor: resultado[0].localEsGanador}" v-text="resultado[0].visitante + resultado[0].equipoVisitante"></span></div>
                    </div>
                    <div class="imagen-equipos">
                      <img class="imagen-resultado" :src="resultado[0].imagen">
                    </div>
                  </div>
                  <div class="derecha" v-if="resultado[1]">
                    <div class="equipos">
                      <div :class="{empate: resultado[1].esEmpate, ganador: resultado[1].localEsGanador, perdedor: !resultado[1].localEsGanador && !resultado[1].esEmpate }"><span class="titulo-resultado" v-text="resultado[1].local + resultado[1].equipoLocal"></span></div>
                      <div :class="{empate: resultado[1].esEmpate, ganador: !resultado[1].localEsGanador, perdedor: resultado[1].localEsGanador}"><span class="titulo-resultado" v-text="resultado[1].visitante + resultado[1].equipoVisitante"></span></div>
                    </div>
                    <div class="imagen-equipos">
                      <img class="imagen-resultado" :src="resultado[1].imagen">
                    </div>
                  </div>
              </div>
            </div>
            <div v-show="fecha.editando">
              <div class="resultado" v-for="(resultado) in fecha.resultados" :key="resultado">
                  <div class="izquierda">
                    <div class="equipos">
                      <div class="equipo"><input class="input input-resultado" v-model="resultado[0].local"/><input class="input input-titulo" v-model="resultado[0].equipoLocal"></div>
                      <div class="equipo"><input class="input input-resultado" v-model="resultado[0].visitante" /><input class="input input-titulo" v-model="resultado[0].equipoVisitante"></div>
                    </div>
                    <div class="imagen-equipos">
                      <div class="imagen-resultado"><input class="input input-imagen" v-model="resultado[0].imagen" /></div>
                    </div>
                  </div>
                  <div class="derecha" v-if="resultado[1]">
                    <div class="equipos">
                      <div class="equipo"><input class="input input-resultado" v-model="resultado[1].local"/><input class="input input-titulo" v-model="resultado[1].equipoLocal"></div>
                      <div class="equipo"><input class="input input-resultado" v-model="resultado[1].visitante" /><input class="input input-titulo" v-model="resultado[1].equipoVisitante"></div>
                    </div>
                    <div class="imagen-equipos">
                      <div class="imagen-resultado"><input class="input input-imagen" v-model="resultado[1].imagen" /></div>
                    </div>
                  </div>
              </div>
              <div class="center-box">
                <span class="enviar" @click="enviarFecha(1)">ENVIAR</span>
              </div>
            </div>
          </div>
        </div>
        <div class="center-box" id="tabla" v-show="!mostrarResultado">
          <table>
            <thead>
              <tr>
                <th>
                  <span>
                    Selección
                  </span>
                </th>
                <th>
                  <span>
                    PJ
                  </span>
                </th>
                <th>
                  <span>
                    PG
                  </span>
                </th>
                <th>
                  <span>
                    PE
                  </span>
                </th>
                <th>
                  <span>
                    PP
                  </span>
                </th>
                <th>
                  <span>
                    DG
                  </span>
                </th>
                <th>
                  <span>
                    Puntos
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="equipo in equipos" :key="equipo" :class="{clasificado: equipo.clasificado, clasificadoRepesca: equipo.clasificadoRepesca, noClasificado: !equipo.clasificadoRepesca && !equipo.clasificado}">
                <td>
                  {{equipo.id}}
                </td>
                <td>
                  <span class="celda">{{equipo.partidosJugados}}</span>
                </td>
                <td>
                  <span class="celda">{{equipo.ganados}}</span>
                </td>
                <td>
                  <span class="celda">{{equipo.empates}}</span>
                </td>
                <td>
                  <span class="celda">{{equipo.perdidos}}</span>
                </td>
                <td>
                  <span class="celda">{{equipo.diferenciaGoles}}</span>
                </td>
                <td>
                  <span class="celda">{{equipo.puntos}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import estilos from './styles.css';
  export default {
    data() {
      const fechas = [
        {
          id: 1,
          mostrar: true,
          editando: false,
          resultados:[
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado1.jpg',
                equipoLocal: " Paraguay",
                equipoVisitante: " Peru",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 1,
                visitante: 0,
                imagen: '../assets/resultado2.jpg',
                equipoLocal: " Argentina",
                equipoVisitante: " Ecuador",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 1,
                imagen: '../assets/resultado3.jpeg',
                equipoLocal: " Uruguay",
                equipoVisitante: " Chile",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 3,
                visitante: 0,
                imagen: '../assets/resultado4.jpg',
                equipoLocal: " Colombia",
                equipoVisitante: " Venezuela",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 5,
                visitante: 0,
                imagen: '../assets/resultado5.jpg',
                equipoLocal: " Brazil",
                equipoVisitante: " Bolivia",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 2,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 1,
                visitante: 2,
                imagen: '../assets/resultado6.jpg',
                equipoLocal: " Bolivia",
                equipoVisitante: " Argentina",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 4,
                visitante: 2,
                imagen: '../assets/resultado7.jpg',
                equipoLocal: " Ecuador",
                equipoVisitante: " Uruguay",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 1,
                imagen: '../assets/resultado8.jpg',
                equipoLocal: " Venezuela",
                equipoVisitante: " Paraguay",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 4,
                imagen: '../assets/resultado9.jpg',
                equipoLocal: " Peru",
                equipoVisitante: " Brazil",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado10.jpg',
                equipoLocal: " Chile",
                equipoVisitante: " Colombia",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 3,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 2,
                visitante: 3,
                imagen: '../assets/resultado11.jpg',
                equipoLocal: " Bolivia",
                equipoVisitante: " Ecuador",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 1,
                visitante: 1,
                imagen: '../assets/resultado12.jpg',
                equipoLocal: " Argentina",
                equipoVisitante: " Paraguay",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 3,
                imagen: '../assets/resultado13.jpg',
                equipoLocal: " Colombia",
                equipoVisitante: " Uruguay",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 0,
                imagen: '../assets/resultado14.jpg',
                equipoLocal: " Chile",
                equipoVisitante: " Peru",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 1,
                visitante: 0,
                imagen: '../assets/resultado15.jpg',
                equipoLocal: " Brazil",
                equipoVisitante: " Venezuela",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 4,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 6,
                visitante: 1,
                imagen: '../assets/resultado16.jpg',
                equipoLocal: " Ecuador",
                equipoVisitante: " Colombia",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 1,
                imagen: '../assets/resultado17.jpg',
                equipoLocal: " Venezuela",
                equipoVisitante: " Chile",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado18.jpg',
                equipoLocal: " Paraguay",
                equipoVisitante: " Bolivia",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 0,
                visitante: 2,
                imagen: '../assets/resultado19.jpg',
                equipoLocal: " Uruguay",
                equipoVisitante: " Brazil",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 2,
                imagen: '../assets/resultado20.jpg',
                equipoLocal: " Peru",
                equipoVisitante: " Argentina",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
      ];
      const equipos = [
        {
          id:"Argentina",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Bolivia",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Brazil",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Chile",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Colombia",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Ecuador",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Paraguay",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Peru",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Uruguay",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
        {
          id:"Venezuela",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
        },
      ];
      const deshabilitarClickExterior = true;
      const estaAbierto = false;
      const iconoMenu = true;
      const iconoCerrar = true;
      const cerrarNavegacion = false;
      const escDeshabilitado = false;
      const mostrarResultado = true;
      return {
        mostrarResultado,
        estilos,
        fechas,
        equipos,
        escDeshabilitado,
        cerrarNavegacion,
        iconoCerrar,
        iconoMenu,
        estaAbierto,
        deshabilitarClickExterior,
      };
    },
    methods: {
      abrirMenu() {
        this.estaBarraLateralabierto = true;
        this.$refs.barraNavegacion.style.left = "auto";
        this.$refs.barraNavegacion.style.right = "0px";
        this.$refs.barraNavegacion.style.width = "300px";
      },
      cerrarMenu() {
        this.estaBarraLateralabierto = false;
        this.$refs.barraNavegacion.style.width = "0px";
      },
      cerrarMenuOnEsc(evento) {
        evento = evento || window.event;
        if (evento.key === "Escape" || evento.keyCode === 27) {
          this.cerrarMenu();
        }
      },
      editarFecha(idFecha) {
        this.fechas[idFecha-1].editando = true
      },
      enviarFecha(idFecha) {
        this.fechas[idFecha-1].editando = false
      },
      mostrarFecha1() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = true
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      mostrarFecha2() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = true
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      mostrarFecha3() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = true
        this.fechas[3].mostrar = false
      },
      mostrarFecha4() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = true
      },
      mostrarTabla() {
        this.calcularPuntos()
        this.mostrarResultado = false
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      calcularPuntos() {
        this.asignarPartidos()
        this.equipos.map((equipo) => {
          equipo.puntos = (equipo.ganados*3) + equipo.empates
          equipo.diferenciaGoles = equipo.golesAnotados - equipo.golesContra
        })
        this.equipos.sort((a, b) => {
          if (a.puntos < b.puntos) {
            return 1;
          }else if (a.puntos > b.puntos) {
            return -1;
          }else {
            if (a.ganados < b.ganados) {
              return 1;
            }else if (a.ganados > b.ganados) {
              return -1;
            }else {
              const diferenciaGolesA = a.golesAnotados - a.golesContra
              const diferenciaGolesB = b.golesAnotados - b.golesContra
              if (diferenciaGolesA < diferenciaGolesB) {
                return 1;
              }else if (diferenciaGolesA > diferenciaGolesB) {
                return -1;
              }
            }
          }
          return 0;
        });
        this.equipos.map(((equipo, key) => {
          if (key < 4) {
            equipo.clasificado = true;
            equipo.clasificadoRepesca = false;
          }else if (key == 4) {
            equipo.clasificado = false;
            equipo.clasificadoRepesca = true;
          } else {
            equipo.clasificado = false;
            equipo.clasificadoRepesca = false;
          }
        }))
      },
      resetPartidos() {
        this.equipos.map((equipo) => {
          equipo.ganados = 0
          equipo.perdidos = 0
          equipo.empates = 0
          equipo.golesAnotados = 0
          equipo.golesContra = 0
          equipo.partidosJugados = 0
        })
      },
      asignarPartidos() {
        this.resetPartidos()
        this.fechas.map((fecha) => {
          fecha.resultados.map((resultado) => {
          resultado.map((partido) => {
            const posiciones = []
            for (let index = 0; index < this.equipos.length; index++)  { 
              const equipo = this.equipos[index]
              if (partido.equipoLocal.substring(1,partido.equipoLocal.length) == equipo.id ) {
                posiciones.unshift(index)
              }else if (partido.equipoVisitante.substring(1,partido.equipoVisitante.length) == equipo.id ) {
                posiciones.push(index)
              }
            }
            if (partido.local>partido.visitante) {
              this.equipos[posiciones[0]].ganados += 1;
              this.equipos[posiciones[1]].perdidos += 1;
              partido.localEsGanador = true;
            }else if (partido.local<partido.visitante) {
              this.equipos[posiciones[0]].perdidos += 1;
              this.equipos[posiciones[1]].ganados += 1;
            }else {
              this.equipos[posiciones[0]].empates += 1;
              this.equipos[posiciones[1]].empates += 1;
              partido.esEmpate = true;
            }
            this.equipos[posiciones[0]].golesAnotados += Number(partido.local);
            this.equipos[posiciones[0]].golesContra += Number(partido.visitante);
            this.equipos[posiciones[0]].partidosJugados += 1;
            this.equipos[posiciones[1]].partidosJugados += 1;
            this.equipos[posiciones[1]].golesAnotados += Number(partido.visitante);
            this.equipos[posiciones[1]].golesContra += Number(partido.local);
          })})
        });
      },
    },
    mounted() {
      this.calcularPuntos()
      if (!this.escDeshabilitado) {
        document.addEventListener("keyup", this.cerrarMenuOnEsc);
      }
    },
    unmounted: function () {
      document.removeEventListener("keyup", this.cerrarMenuOnEsc);
    },
  };
</script>