<script setup>
import Header from "./Header.vue";
</script>

<template>
  <div class="h-screen">
    <Header></Header>
    <div id="container-titlemap">
      <div class="titlemap">DATES & PLACES</div>
    </div>
    <div id="container-allmap">
      <div id="container-map">
        <iframe
          class="map"
          src="https://www.google.com/maps/d/embed?mid=1mfvAeMJA4SfyBCZh2xxHWKfzi6HB0w4&ehbc=2E312F&noprof=1"
        ></iframe>
      </div>
      <div id="container-infomap">
        <div>10/10/2023 - Mulouse</div>
        <div>10/10/2023 - Saint-Etienne</div>
        <div>10/10/2023 - Paris</div>
        <div>10/10/2023 - Gonfreville</div>
      </div>
    </div>
    <div id="container-line">
      <div class="line"></div>
    </div>
    <div id="container-titlemap">
      <div class="titlemap">TRANSPORTS</div>
    </div>
  </div>
</template>
