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
            <div @click="showFecha1()">
              <span>Fecha 1</span>
            </div>
            <div @click="showFecha2()">
              <span>Fecha 2</span>
            </div>
            <div @click="showFecha3()">
              <span>Fecha 3</span>
            </div>
            <div @click="showFecha4()">
              <span>Fecha 4</span>
            </div>
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
        <span class="titulo-cuerpo"> Resultados</span>
        <div class="fecha" id="Fecha1" v-show="fechas[0].mostrar">
          <div>
            <span class="subtitulo-cuerpo"> Fecha 1</span>
            <img @click="editarFecha1" class="icono-editar" v-show="!fechas[0].editando" src="./assets/icono_editar.png">
          </div>
          <div v-show="!fechas[0].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[0].local + fechas[0].resultados[0].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[0].visitante + fechas[0].resultados[0].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[0].resultados[0].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[1].local + fechas[0].resultados[1].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[1].visitante + fechas[0].resultados[1].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[0].resultados[1].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[2].local + fechas[0].resultados[2].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[2].visitante + fechas[0].resultados[2].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[0].resultados[2].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[3].local + fechas[0].resultados[3].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[3].visitante + fechas[0].resultados[3].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[0].resultados[3].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[4].local + fechas[0].resultados[4].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[0].resultados[4].visitante + fechas[0].resultados[4].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[0].resultados[4].imagen">
                  </div>
                </div>
            </div>
          </div>
          <div v-show="fechas[0].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[0].local"/><input class="input-titulo" v-model="fechas[0].resultados[0].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[0].visitante" /><input class="input-titulo" v-model="fechas[0].resultados[0].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[0].resultados[0].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[1].local"/><input class="input-titulo" v-model="fechas[0].resultados[1].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[1].visitante" /><input class="input-titulo" v-model="fechas[0].resultados[1].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[0].resultados[1].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[2].local"/><input class="input-titulo" v-model="fechas[0].resultados[2].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[2].visitante" /><input class="input-titulo" v-model="fechas[0].resultados[2].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[0].resultados[2].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[3].local"/><input class="input-titulo" v-model="fechas[0].resultados[3].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[3].visitante" /><input class="input-titulo" v-model="fechas[0].resultados[3].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[0].resultados[3].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[4].local"/><input class="input-titulo" v-model="fechas[0].resultados[4].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[0].resultados[4].visitante" /><input class="input-titulo" v-model="fechas[0].resultados[4].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[0].resultados[4].imagen" /></div>
                  </div>
                </div>
            </div>
          <div class="center-box">
            <span class="enviar" @click="enviarFecha1">ENVIAR</span>
          </div>
          </div>
        </div>
        <div class="fecha" id="Fecha2" v-show="fechas[1].mostrar">
          <div>
            <span class="subtitulo-cuerpo"> Fecha 2</span>
            <img @click="editarFecha2" class="icono-editar" v-show="!fechas[1].editando" src="./assets/icono_editar.png">
          </div>
          <div v-show="!fechas[1].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[0].local + fechas[1].resultados[0].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[0].visitante + fechas[1].resultados[0].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[1].resultados[0].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[1].local + fechas[1].resultados[1].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[1].visitante + fechas[1].resultados[1].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[1].resultados[1].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[2].local + fechas[1].resultados[2].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[2].visitante + fechas[1].resultados[2].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[1].resultados[2].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[3].local + fechas[1].resultados[3].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[3].visitante + fechas[1].resultados[3].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[1].resultados[3].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[4].local + fechas[1].resultados[4].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[1].resultados[4].visitante + fechas[1].resultados[4].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[1].resultados[4].imagen">
                  </div>
                </div>
            </div>
          </div>
          <div v-show="fechas[1].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[0].local"/><input class="input-titulo" v-model="fechas[1].resultados[0].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[0].visitante" /><input class="input-titulo" v-model="fechas[1].resultados[0].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[1].resultados[0].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[1].local"/><input class="input-titulo" v-model="fechas[1].resultados[1].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[1].visitante" /><input class="input-titulo" v-model="fechas[1].resultados[1].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[1].resultados[1].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[2].local"/><input class="input-titulo" v-model="fechas[1].resultados[2].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[2].visitante" /><input class="input-titulo" v-model="fechas[1].resultados[2].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[1].resultados[2].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[3].local"/><input class="input-titulo" v-model="fechas[1].resultados[3].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[3].visitante" /><input class="input-titulo" v-model="fechas[1].resultados[3].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[1].resultados[3].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[4].local"/><input class="input-titulo" v-model="fechas[1].resultados[4].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[1].resultados[4].visitante" /><input class="input-titulo" v-model="fechas[1].resultados[4].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[1].resultados[4].imagen" /></div>
                  </div>
                </div>
            </div>
          <div class="center-box">
            <span class="enviar" @click="enviarFecha2">ENVIAR</span>
          </div>
          </div>
        </div>
        <div class="fecha" id="Fecha3" v-show="fechas[2].mostrar">
          <div>
            <span class="subtitulo-cuerpo"> Fecha 3</span>
            <img @click="editarFecha3" class="icono-editar" v-show="!fechas[2].editando" src="./assets/icono_editar.png">
          </div>
          <div v-show="!fechas[2].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[0].local + fechas[2].resultados[0].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[0].visitante + fechas[2].resultados[0].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[2].resultados[0].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[1].local + fechas[2].resultados[1].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[1].visitante + fechas[2].resultados[1].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[2].resultados[1].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[2].local + fechas[2].resultados[2].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[2].visitante + fechas[2].resultados[2].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[2].resultados[2].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[3].local + fechas[2].resultados[3].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[3].visitante + fechas[2].resultados[3].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[2].resultados[3].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[4].local + fechas[2].resultados[4].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[2].resultados[4].visitante + fechas[2].resultados[4].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[2].resultados[4].imagen">
                  </div>
                </div>
            </div>
          </div>
          <div v-show="fechas[2].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[0].local"/><input class="input-titulo" v-model="fechas[2].resultados[0].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[0].visitante" /><input class="input-titulo" v-model="fechas[2].resultados[0].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[2].resultados[0].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[1].local"/><input class="input-titulo" v-model="fechas[2].resultados[1].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[1].visitante" /><input class="input-titulo" v-model="fechas[2].resultados[1].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[2].resultados[1].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[2].local"/><input class="input-titulo" v-model="fechas[2].resultados[2].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[2].visitante" /><input class="input-titulo" v-model="fechas[2].resultados[2].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[2].resultados[2].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[3].local"/><input class="input-titulo" v-model="fechas[2].resultados[3].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[3].visitante" /><input class="input-titulo" v-model="fechas[2].resultados[3].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[2].resultados[3].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[4].local"/><input class="input-titulo" v-model="fechas[2].resultados[4].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[2].resultados[4].visitante" /><input class="input-titulo" v-model="fechas[2].resultados[4].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[2].resultados[4].imagen" /></div>
                  </div>
                </div>
            </div>
          <div class="center-box">
            <span class="enviar" @click="enviarFecha3">ENVIAR</span>
          </div>
          </div>
        </div>
        <div class="fecha" id="Fecha4" v-show="fechas[3].mostrar">
          <div>
            <span class="subtitulo-cuerpo"> Fecha 4</span>
            <img @click="editarFecha4" class="icono-editar" v-show="!fechas[3].editando" src="./assets/icono_editar.png">
          </div>
          <div v-show="!fechas[3].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[0].local + fechas[3].resultados[0].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[0].visitante + fechas[3].resultados[0].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[3].resultados[0].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[1].local + fechas[3].resultados[1].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[1].visitante + fechas[3].resultados[1].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[3].resultados[1].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[2].local + fechas[3].resultados[2].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[2].visitante + fechas[3].resultados[2].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[3].resultados[2].imagen">
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[3].local + fechas[3].resultados[3].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[3].visitante + fechas[3].resultados[3].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[3].resultados[3].imagen">
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[4].local + fechas[3].resultados[4].equipoLocal"></span></div>
                    <div><span class="titulo-resultado" v-text="fechas[3].resultados[4].visitante + fechas[3].resultados[4].equipoVisitante"></span></div>
                  </div>
                  <div class="imagen-equipos">
                    <img class="imagen-resultado" :src="fechas[3].resultados[4].imagen">
                  </div>
                </div>
            </div>
          </div>
          <div v-show="fechas[3].editando">
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[0].local"/><input class="input-titulo" v-model="fechas[3].resultados[0].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[0].visitante" /><input class="input-titulo" v-model="fechas[3].resultados[0].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[3].resultados[0].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[1].local"/><input class="input-titulo" v-model="fechas[3].resultados[1].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[1].visitante" /><input class="input-titulo" v-model="fechas[3].resultados[1].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[3].resultados[1].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[2].local"/><input class="input-titulo" v-model="fechas[3].resultados[2].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[2].visitante" /><input class="input-titulo" v-model="fechas[3].resultados[2].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[3].resultados[2].imagen" /></div>
                  </div>
                </div>
                <div class="derecha">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[3].local"/><input class="input-titulo" v-model="fechas[3].resultados[3].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[3].visitante" /><input class="input-titulo" v-model="fechas[3].resultados[3].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[3].resultados[3].imagen" /></div>
                  </div>
                </div>
            </div>
            <div class="resultado">
                <div class="izquierda">
                  <div class="equipos">
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[4].local"/><input class="input-titulo" v-model="fechas[3].resultados[4].equipoLocal"></div>
                    <div class="equipo"><input class="input-resultado" v-model="fechas[3].resultados[4].visitante" /><input class="input-titulo" v-model="fechas[3].resultados[4].equipoVisitante"></div>
                  </div>
                  <div class="imagen-equipos">
                    <div class="imagen-resultado"><input class="input-titulo" v-model="fechas[3].resultados[4].imagen" /></div>
                  </div>
                </div>
            </div>
          <div class="center-box">
            <span class="enviar" @click="enviarFecha4">ENVIAR</span>
          </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import estilos from './styles.css';
export default {
  data() {
    const deshabilitarClickExterior = true;
    const estaAbierto = false;
    const iconoMenu = true;
    const iconoCerrar = true;
    const cerrarNavegacion = false;
    const escDeshabilitado = false;
    const fechas = [
      {
        id: 1,
        mostrar: true,
        editando: false,
        resultados:[
          {
            local: 2,
            visitante: 2,
            imagen: '../assets/resultado1.jpg',
            equipoLocal: " Paraguay",
            equipoVisitante: " Peru",
            esGanador: false,
          },
          {
            local: 1,
            visitante: 0,
            imagen: '../assets/resultado2.jpg',
            equipoLocal: " Argentina",
            equipoVisitante: " Ecuador",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 1,
            imagen: '../assets/resultado3.jpeg',
            equipoLocal: " Uruguay",
            equipoVisitante: " Chile",
            esGanador: false,
          },
          {
            local: 3,
            visitante: 0,
            imagen: '../assets/resultado4.jpg',
            equipoLocal: " Colombia",
            equipoVisitante: " Venezuela",
            esGanador: false,
          },
          {
            local: 5,
            visitante: 0,
            imagen: '../assets/resultado5.jpg',
            equipoLocal: " Brazil",
            equipoVisitante: " Bolivia",
            esGanador: false,
          },
        ],
      },
      {
        id: 2,
        mostrar: false,
        editando: false,
        resultados:[
          {
            local: 1,
            visitante: 2,
            imagen: '../assets/resultado6.jpg',
            equipoLocal: " Bolivia",
            equipoVisitante: " Argentina",
            esGanador: false,
          },
          {
            local: 4,
            visitante: 2,
            imagen: '../assets/resultado7.jpg',
            equipoLocal: " Ecuador",
            equipoVisitante: " Uruguay",
            esGanador: false,
          },
          {
            local: 0,
            visitante: 1,
            imagen: '../assets/resultado8.jpg',
            equipoLocal: " Venezuela",
            equipoVisitante: " Paraguay",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 4,
            imagen: '../assets/resultado9.jpg',
            equipoLocal: " Peru",
            equipoVisitante: " Brazil",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 2,
            imagen: '../assets/resultado10.jpg',
            equipoLocal: " Chile",
            equipoVisitante: " Colombia",
            esGanador: false,
          },
        ],
      },
      {
        id: 3,
        mostrar: false,
        editando: false,
        resultados:[
          {
            local: 2,
            visitante: 3,
            imagen: '../assets/resultado11.jpg',
            equipoLocal: " Bolivia",
            equipoVisitante: " Ecuador",
            esGanador: false,
          },
          {
            local: 1,
            visitante: 1,
            imagen: '../assets/resultado12.jpg',
            equipoLocal: " Argentina",
            equipoVisitante: " Paraguay",
            esGanador: false,
          },
          {
            local: 0,
            visitante: 3,
            imagen: '../assets/resultado13.jpg',
            equipoLocal: " Colombia",
            equipoVisitante: " Uruguay",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 0,
            imagen: '../assets/resultado14.jpg',
            equipoLocal: " Chile",
            equipoVisitante: " Peru",
            esGanador: false,
          },
          {
            local: 1,
            visitante: 0,
            imagen: '../assets/resultado15.jpg',
            equipoLocal: " Brazil",
            equipoVisitante: " Venezuela",
            esGanador: false,
          },
        ],
      },
      {
        id: 4,
        mostrar: false,
        editando: false,
        resultados:[
          {
            local: 6,
            visitante: 1,
            imagen: '../assets/resultado16.jpg',
            equipoLocal: " Ecuador",
            equipoVisitante: " Colombia",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 1,
            imagen: '../assets/resultado17.jpg',
            equipoLocal: " Venezuela",
            equipoVisitante: " Chile",
            esGanador: false,
          },
          {
            local: 2,
            visitante: 2,
            imagen: '../assets/resultado18.jpg',
            equipoLocal: " Paraguay",
            equipoVisitante: " Bolivia",
            esGanador: false,
          },
          {
            local: 0,
            visitante: 2,
            imagen: '../assets/resultado19.jpg',
            equipoLocal: " Uruguay",
            equipoVisitante: " Brazil",
            esGanador: false,
          },
          {
            local: 0,
            visitante: 2,
            imagen: '../assets/resultado20.jpg',
            equipoLocal: " Peru",
            equipoVisitante: " Argentina",
            esGanador: false,
          },
        ],
      },
    ];
    return {
      escDeshabilitado,
      cerrarNavegacion,
      iconoCerrar,
      iconoMenu,
      estaAbierto,
      deshabilitarClickExterior,
      estilos,
      fechas,
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
    showFecha1() {
      this.fechas[0].mostrar = true
      this.fechas[1].mostrar = false
      this.fechas[2].mostrar = false
      this.fechas[3].mostrar = false
    },
    showFecha2() {
      this.fechas[0].mostrar = false
      this.fechas[1].mostrar = true
      this.fechas[2].mostrar = false
      this.fechas[3].mostrar = false
    },
    showFecha3() {
      this.fechas[0].mostrar = false
      this.fechas[1].mostrar = false
      this.fechas[2].mostrar = true
      this.fechas[3].mostrar = false
    },
    showFecha4() {
      this.fechas[0].mostrar = false
      this.fechas[1].mostrar = false
      this.fechas[2].mostrar = false
      this.fechas[3].mostrar = true
    },
    editarFecha1() {
      this.fechas[0].editando = true
    },
    enviarFecha1() {
      this.fechas[0].editando = false
    },
    editarFecha2() {
      this.fechas[1].editando = true
    },
    enviarFecha2() {
      this.fechas[1].editando = false
    },
    editarFecha3() {
      this.fechas[2].editando = true
    },
    enviarFecha3() {
      this.fechas[2].editando = false
    },
    editarFecha4() {
      this.fechas[3].editando = true
    },
    enviarFecha4() {
      this.fechas[3].editando = false
    },
  },
  mounted() {
    if (!this.escDeshabilitado) {
      document.addEventListener("keyup", this.cerrarMenuOnEsc);
    }
  },
  unmounted: function () {
    document.removeEventListener("keyup", this.cerrarMenuOnEsc);
  },
};
</script>