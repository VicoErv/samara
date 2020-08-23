<template>
  <div>
    <div :class="`menu-container ${(top ? 'top' : '')} ${(show ? 'active' : '')}`" ref="menu">
      <nav id="main-navigation" class="nav-main">
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="#0">Home</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#0">About</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#0">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="q_smooth">

      <Nuxt/>
    </div>

    <div :class="`nav-menu ${(show ? 'close' : '')}`" @click="show = !show">
      <span class="line"></span>
      <span class="line"></span>
      <span class="text">Menu</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      top: false
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.top = true;

        return;
      }

      setTimeout(() => {
        this.top = false;
      }, 300);
    }
  }
}
</script>

<style>
</style>
