<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>{{ t('gallery.title') }}</h1>
      <p v-html="t('gallery.intro')"></p>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.bladesTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/flugel-abgebaut/windmill-1.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-2.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-3.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-4.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-5.jpeg" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.moodsTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-1.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-2.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-6.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-4.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-5.jpeg" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.historicTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-8.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-13.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-14.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-3.jpeg" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.fireTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-11.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-12.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-9.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-10.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-15.jpeg" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-16.jpeg" loading="lazy" class="scroll-img" />
      </div>
    </div>
  </div>
</template>
