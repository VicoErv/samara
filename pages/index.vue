<template>
  <div class="q_smooth">
    <resize-observer @notify="handleResize"/>
    <header>
      <div class="background-carousel">
        <div class="carousel-cell" style="background-image: url('/Hero 1.jpg');">
          <div class="hero-title">
            <div class="container">
              <h2>Wellness<br> Programs</h2>
            </div>
          </div>
        </div>
        <div class="carousel-cell" style="background-image: url('/Hero 1.jpg');"></div>
      </div>
      <div class="container">
        <h1 class="web-title">SAMARA</h1>

        <div v-if="background != null" class="arrows">
          <div class="arrow arrow-left" @click="() => background.previous()">
            <a href="#">
              Prev
            </a>
          </div>
          <div class="arrow-line">

          </div>
          <div class="arrow arrow-right" @click="() => background.next()">
            <a href="#">
              Next
            </a>
          </div>
        </div>
      </div>
    </header>

    <section class="container">
      <h2 class="section-title">
        Ita Multo Sanguine Profuso In Laetitia Et In Victoria Est Mortuus.
      </h2>

      <div class="brand brand-1">
        <div class="description">
          <div class="label">Brand Story</div>
          <h3>Ita Multo Sanguine Profuso In Latetitia</h3>
        </div>

        <div class="background">
          <div class="background-image vs-div vs-opacity-work" data-speed="-.2"
               style="background-image: url('/Brand Story 1.jpg')"></div>
        </div>
      </div>

      <div class="brand brand-2">
        <div class="description">
          <p>
            Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit; Hoc est non dividere,
            sed frangere. Eaedem res maneant alio modo.
          </p><br>

          <p>
            Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit; Hoc est non dividere,
            sed frangere. Eaedem res maneant alio modo.
          </p>
        </div>

        <div class="background">
          <div class="background-image vs-div" data-speed="-.2"
               style="background-image: url('/Brand Story 2.jpg')"></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container instagram-container">
        <div class="connect">
          Connect With Us
        </div>

        <div class="instagram">
          <img src="/instagram-brands.svg" alt="" width="32"> <span>samaraspa</span>
        </div>

        <div class="main-carousel">
          <div class="carousel-cell">
            <div class="background-image" style="background-image: url('/Instagram 1.jpg')"></div>
          </div>

          <div class="carousel-cell">
            <div class="background-image" style="background-image: url('/Instagram 2.jpg')"></div>
          </div>

          <div class="carousel-cell">
            <div class="background-image" style="background-image: url('/Instagram 3.jpg')"></div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="background-image vs-div" data-speed="-.6" style="background-image: url('/Footer.jpg')"></div>
      <div class="footer-nav">
        <div class="container position-relative">
          <div class="float-right vs-div vs-opacity-start" data-speed="-.2">
            <div class="next-label">Next</div>
            <div class="next-title">
              Wellness
            </div>
          </div>
        </div>
      </div>
      <div class="footer-text" style="bottom: 0; position: absolute; width: 100%">
        <div class="container">
          <div class="about columns vs-div vs-opacity-title vs-div" data-speed="-.2">
            <div class="about-title">
              Samara Spa
            </div>

            <p class="about-description">
              Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit;
              Hoc est non dividere.
            </p>

            <p class="about-contact">
              P: +6282 9839 820<br>
              E: Samaraspa@gmail.com
            </p>

            <p class="about-copy">
              &copy; 2020 SamaraSpa. Website by Fleava
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Flickity from 'flickity';
import Parallax from "../plugins/parallax";
import {ResizeObserver} from 'vue-resize';

export default {
  components: {ResizeObserver},
  data() {
    return {
      background: null
    }
  },
  methods: {
    handleResize() {
      qSmooth.resize();
    },
  },
  mounted() {
    let el = document.querySelector('.main-carousel');
    const flickity = new Flickity(el, {
      cellAlign: 'left',
      contain: true,
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
      freeScrollFriction: 0.03,
    });

    let backgroundEl = document.querySelector('.background-carousel');
    this.background = new Flickity(backgroundEl, {
      accessibility: true,
      prevNextButtons: false,
      pageDots: true,
      setGallerySize: false,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    });

    let slides = document.querySelectorAll('.background-carousel .carousel-cell');

    this.background.on('scroll', () => {
      this.background.slides.forEach((slide, i) => {
        let image = slides[i];
        let x = (slide.target + this.background.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
      });
    });

    if (document.getElementsByClassName('q_smooth').length) {
      const qSmooth = new Parallax({
        native: true,
        section: document.querySelector('.q_smooth'),
        preload: true,
        ease: 0.1,
        divs: document.querySelectorAll('.vs-div'),
      });

      qSmooth.init();
      window.qSmooth = qSmooth;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body.y-scroll .q_smooth {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: auto;
  will-change: transform;
}

footer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

footer .background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  opacity: .7;
}

.main-carousel {
  margin-top: 90px;
}

.main-carousel:focus {
  outline: none;
}

.main-carousel .carousel-cell {
  width: 25vw;

  margin-right: 30px;
}

.main-carousel .carousel-cell > .background-image {
  width: 100%;
  height: 50vh;
  background-size: cover;
}

.instagram {
  text-transform: uppercase;
  font-family: 'Domaine Sans', sans-serif;
  font-size: 48px;

  letter-spacing: 10pt;

  padding-top: 70px;
}

.instagram > span {
  padding-left: 50px;
}

.connect {
  font-size: 14pt;
  text-transform: uppercase;
  font-family: 'Houschka Pro', sans-serif;

  letter-spacing: 8px;
}

header {
  height: 100vh;
  position: relative;
}

.web-title {
  margin-top: 0;
  font-weight: normal;
  font-family: 'Domaine Sans', sans-serif;
  letter-spacing: 8px;
  text-align: center;

  padding-top: 64px;
  color: #fff;
}

.header-title {
  color: #fff;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
}

.nav-menu {
  position: fixed;
  right: 5%;
  z-index: 9999;
  top: 50%;
  margin-top: -30px;
  cursor: pointer;
  height: 60px;
  width: 58px;
  padding: 20px;
  transition: all 0.2s ease;
}

.nav-menu span.line {
  width: 2px;
  height: 70px;
  background: #fff;
  display: block;
  position: absolute;
  top: 20px;
  transition: all 0.3s ease;
}

.nav-menu span.text {
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  display: block;
  opacity: 0;
  color: #fff;
  transition: all 0.4s ease;
  transform: rotate(-90deg) translateX(-40px);
}

.nav-menu span.line:nth-child(1) {
  left: 10px;
}

.nav-menu span.line:nth-child(2) {
  left: 28px;
}

.nav-menu:hover span.line {
  transform: translateY(-50%);
}

.nav-menu:hover span.line:nth-child(1) {
  height: 0;
}

.nav-menu:hover span.line:nth-child(2) {
  height: 90px;
}

.nav-menu:hover span.text {
  transform: rotate(-90deg) translateX(-80px);
  opacity: 1;
}

/* New Section */
section {
  padding-top: 90px;
}

.brand-1 .background-image {
  width: 100%;
  height: 100%;

  background-size: cover;
}

.brand-2 .background-image {
  width: 100%;
  height: 100%;

  background-size: cover;
}

.brand > .description > .label {
  font-family: 'Houschka Pro', sans-serif;
  letter-spacing: 8px;
  font-size: 18px;
}
</style>
