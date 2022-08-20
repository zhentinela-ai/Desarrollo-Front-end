<template>
    <main id="app">
      <header id="cabezera">
        <img class="icono-cabezera" src="./assets/icon_bnr.png">
        <span class="titulo-cabezera"> Eliminatorias CONMEBOL Qatar</span>
      </header>
      <div class="cuerpo" id="cuerpo">
        <span class="titulo-cuerpo"> Resultados</span>
        <div class="fecha">
          <span class="subtitulo-cuerpo"> Fecha 1</span>
          <div class="resultado">
              <div class="izquierda">
                <div class="equipos">
                  <div><span class="titulo-resultado" v-text="2 + equipo7"></span></div>
                  <div><span class="titulo-resultado" v-text="2 + equipo8"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado1.jpg">
                </div>
              </div>
              <div class="derecha">
                <div class="equipos">
                  <div><span class="titulo-resultado" v-text="1 + equipo1"></span></div>
                  <div><span class="titulo-resultado" v-text="0 + equipo6"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado2.jpg">
                </div>
              </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="2 + equipo9"></span></div>
                <div><span class="titulo-resultado" v-text="1 + equipo4"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado3.jpeg">
              </div>
            </div>
            <div class="derecha">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="3 + equipo5"></span></div>
                <div><span class="titulo-resultado" v-text="0 + equipo10"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado4.jpg">
              </div>
            </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="5 + equipo3"></span></div>
                <div><span class="titulo-resultado" v-text="0 + equipo2"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado5.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="fecha">
          <span class="subtitulo-cuerpo"> Fecha 2</span>
          <div class="resultado">
              <div class="izquierda">
                <div class="equipos">
                  <div><span class="titulo-resultado" v-text="1 + equipo2"></span></div>
                  <div><span class="titulo-resultado" v-text="2 + equipo1"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado6.jpg">
                </div>
              </div>
              <div class="derecha">
                <div class="equipos">
                  <div><span class="titulo-resultado" v-text="4 + equipo6"></span></div>
                  <div><span class="titulo-resultado" v-text="2 + equipo9"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado7.jpg">
                </div>
              </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="0 + equipo10"></span></div>
                <div><span class="titulo-resultado" v-text="1 + equipo7"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado8.jpg">
              </div>
            </div>
            <div class="derecha">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="2 + equipo8"></span></div>
                <div><span class="titulo-resultado" v-text="4 + equipo3"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado9.jpg">
              </div>
            </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado" v-text="2 + equipo4"></span></div>
                <div><span class="titulo-resultado" v-text="2 + equipo5"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado10.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="fecha">
          <span class="subtitulo-cuerpo"> Fecha 3</span>
          <div class="resultado">
              <div class="izquierda">
                <div class="equipos">
                  <div><span class="titulo-resultado " v-text="2 + equipo2"></span></div>
                  <div><span class="titulo-resultado " v-text="3 + equipo6"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado11.jpg">
                </div>
              </div>
              <div class="derecha">
                <div class="equipos">
                  <div><span class="titulo-resultado " v-text="1 + equipo1"></span></div>
                  <div><span class="titulo-resultado " v-text="1 + equipo7"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado12.jpg">
                </div>
              </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="0 + equipo5"></span></div>
                <div><span class="titulo-resultado " v-text="3 + equipo9"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado13.jpg">
              </div>
            </div>
            <div class="derecha">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="2 + equipo4"></span></div>
                <div><span class="titulo-resultado " v-text="0 + equipo8"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado14.jpg">
              </div>
            </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="1 + equipo3"></span></div>
                <div><span class="titulo-resultado " v-text="0 + equipo10"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado15.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="fecha">
          <span class="subtitulo-cuerpo"> Fecha 4</span>
          <div class="resultado">
              <div class="izquierda">
                <div class="equipos">
                  <div><span class="titulo-resultado " v-text="6 + equipo6"></span></div>
                  <div><span class="titulo-resultado " v-text="1 + equipo5"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado16.jpg">
                </div>
              </div>
              <div class="derecha">
                <div class="equipos">
                  <div><span class="titulo-resultado " v-text="2 + equipo10"></span></div>
                  <div><span class="titulo-resultado " v-text="1 + equipo4"></span></div>
                </div>
                <div class="imagen-equipos">
                  <img class="imagen-resultado" src="./assets/resultado17.jpg">
                </div>
              </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="2 + equipo7"></span></div>
                <div><span class="titulo-resultado " v-text="2 + equipo2"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado18.jpg">
              </div>
            </div>
            <div class="derecha">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="0 + equipo9"></span></div>
                <div><span class="titulo-resultado " v-text="2 + equipo3"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado19.jpg">
              </div>
            </div>
          </div>
          <div class="resultado">
            <div class="izquierda">
              <div class="equipos">
                <div><span class="titulo-resultado " v-text="0 + equipo8"></span></div>
                <div><span class="titulo-resultado " v-text="2 + equipo1"></span></div>
              </div>
              <div class="imagen-equipos">
                <img class="imagen-resultado" src="./assets/resultado20.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import styles from './styles.css'
export default {
  data() {
    const equipo1 = " Argentina";
    const equipo2 = " Bolivia";
    const equipo3 = " Brazil";
    const equipo4 = " Chile";
    const equipo5 = " Colombia";
    const equipo6 = " Ecuador";
    const equipo7 = " Paraguay";
    const equipo8 = " Peru";
    const equipo9 = " Uruguay";
    const equipo10 = " Venezuela";
    return {
      equipo1,
      equipo2,
      equipo3,
      equipo4,
      equipo5,
      equipo6,
      equipo7,
      equipo8,
      equipo9,
      equipo10,
      ...styles
    };
  }
};
</script>
