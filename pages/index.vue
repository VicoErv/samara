<template>
  <div>
    <resize-observer @notify="handleResize"/>
    <header>
      <div class="background-carousel">
        <div v-for="(bg, i) of backgrounds" :key="i" :data-id="i" class="carousel-cell">
          <div class="background-image" :style="`background-image: url('${bg.image}');`"></div>
          <div class="hero-title">
            <div class="container">
              <h2>Wellness<br> Programs</h2>
            </div>
          </div>
        </div>
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

      <div class="hero-bullets">
        <div v-for="i in backgrounds.length" :key="i"
             :class="'bullet-item' + (backgroundSelectedId === i ? ' active' : '')">
          <a href="#" class="bullet" @click="selectBackground(i - 1)"></a>

          <transition name="fade">
            <span v-if="backgroundSelectedId === i"><i class="line"></i> {{ i }}</span>
          </transition>
        </div>
      </div>

      <div class="socials">
        <a href="#">ig.</a>
        <a href="#">fb.</a>
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
      <div class="instagram-container">
        <div class="container">
          <div class="connect">
            Connect With Us
          </div>

          <div class="instagram">
            <img src="/instagram-brands.svg" class="logo" alt=""> <span>samaraspa</span>
          </div>
        </div>

        <div class="instagram-carousel-container">
          <div class="container">
            <div class="main-carousel">
              <div class="carousel-cell">
                <img src="/Instagram%201.jpg" alt="" :style="`width: 100%`" @load="matchHeight($event)">
              </div>

              <div class="carousel-cell">
                <img src="/Instagram%202.jpg" alt="" :style="`height: ${igHeight}px; width: 100%`">
              </div>

              <div class="carousel-cell">
                <img src="/Instagram%203.jpg" alt="" :style="`height: ${igHeight}px; width: 100%`">
              </div>
            </div>

            <div class="next-indicator">
              <img src="/Next%20Arrow.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="background-image vs-div" data-speed="-.6" style="background-image: url('/Footer.jpg')"></div>
      <div class="container h-full">
        <div class="footer-text">
          <div class="footer-items footer-item-1">
            <a href="#" class="footer-nav">
              <div class="nav-link">Next</div>
              <div class="nav-title">Wellness</div>
              <img src="/Next%20Arrow.svg" alt="">
            </a>
          </div>
          <div class="footer-items footer-item-2">
            <div class="footer-item about">
              <div class="about-title">
                Samara Spa
              </div>

              <p class="about-description">
                Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit;
                Hoc est non dividere.
              </p>

              <p class="about-contact">
                P: <a href="#" class="underline">+6282 9839 820</a><br>
                E: <a href="#" class="underline">Samaraspa@gmail.com</a>
              </p>

              <p class="about-copy">
                &copy; 2020 SamaraSpa. Website by Fl&eacute;ava
              </p>
            </div>
          </div>
          <div class="footer-items footer-item-3">
            <a href="#" class="underline">
              ig.
            </a>

            <a href="#" class="underline">
              fb.
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Flickity from 'flickity-imagesloaded';
import Parallax from "../plugins/parallax";
import {ResizeObserver} from 'vue-resize';

export default {
  components: {ResizeObserver},
  data() {
    return {
      background: null,
      backgroundSelectedId: 1,
      backgrounds: [
        {
          image: '/Hero%201.jpg',
          title: 'Wellness Programs'
        },
        {
          image: '/Hero%202.jpg',
          title: 'Wellness Programs'
        }
      ],
      igHeight: 0,
    }
  },
  methods: {
    handleResize() {
      qSmooth.resize();
    },

    onBackgroundSelect() {
      let selected = document.querySelector('.background-carousel .is-selected');

      let id = selected.getAttribute('data-id');

      this.backgroundSelectedId = parseInt(id) + 1;
    },

    selectBackground(index) {
      this.background.select(index);
    },

    matchHeight(e) {
      if (this.igHeight === 0) {
        this.igHeight = e.target.height;
      }
    }
  },
  mounted() {
    let el = document.querySelector('.main-carousel');
    let flickity = null;
    flickity = new Flickity(el, {
      cellAlign: 'left',
      contain: true,
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
      freeScrollFriction: 0.03,
      imagesLoaded: true
    });

    let backgroundEl = document.querySelector('.background-carousel');
    this.background = new Flickity(backgroundEl, {
      accessibility: true,
      prevNextButtons: false,
      pageDots: false,
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

    this.background.on('select', this.onBackgroundSelect.bind(this));

    let slides = document.querySelectorAll('.background-carousel .carousel-cell');

    this.background.on('scroll', () => {
      this.background.slides.forEach((slide, i) => {
        let image = slides[i].querySelector('.background-image');
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
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

footer .background-image {
  z-index: -1;
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

header {
  height: 100vh;
  position: relative;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
