<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <h1>{{ t('gallery.title') }}</h1>
  <p v-html="t('gallery.intro')"></p>

  <h3>{{ t('gallery.bladesTitle') }}</h3>
  <div class="scroll-gallery">
    <img src="/imgs/flugel-abgebaut/windmill-1.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/flugel-abgebaut/windmill-2.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/flugel-abgebaut/windmill-3.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/flugel-abgebaut/windmill-4.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/flugel-abgebaut/windmill-5.jpeg" loading="lazy" class="scroll-img" />
  </div>

  <h3>{{ t('gallery.whitTitle') }}</h3>
  <div class="grid-gallery">
    <img src="/imgs/pfingstmontag/pfingstmontag3.jpeg" alt="" class="grid-img" />
    <img src="/imgs/pfingstmontag/pfingstmontag1.jpeg" alt="" class="grid-img" />
    <img src="/imgs/pfingstmontag/pfingstmontag2.jpeg" alt="" class="grid-img" />
    <img src="/imgs/pfingstmontag/pfingstmontag4.jpeg" alt="" class="grid-img" />
    <img src="/imgs/pfingstmontag/pfingstmontag5.jpeg" alt="" class="grid-img" />
    <img src="/imgs/pfingstmontag/pfingstmontag6.jpeg" alt="" class="grid-img" />
  </div>

  <h3>{{ t('gallery.moodsTitle') }}</h3>
  <div class="scroll-gallery">
    <img src="/imgs/bilder/windmill-1.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-2.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-6.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-4.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-5.jpeg" loading="lazy" class="scroll-img" />
  </div>

  <h3>{{ t('gallery.historicTitle') }}</h3>
  <div class="scroll-gallery">
    <img src="/imgs/bilder/windmill-8.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-13.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-14.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-3.jpeg" loading="lazy" class="scroll-img" />
  </div>

  <h3>{{ t('gallery.fireTitle') }}</h3>
  <div class="scroll-gallery">
    <img src="/imgs/bilder/windmill-11.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-12.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-9.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-10.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-15.jpeg" loading="lazy" class="scroll-img" />
    <img src="/imgs/bilder/windmill-16.jpeg" loading="lazy" class="scroll-img" />
  </div>
</template>
