<template>
  <div>
    <Nuxt />

    <div class="nav-menu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="text">Menu</span>
    </div>
  </div>
</template>

<style>
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
</style>
