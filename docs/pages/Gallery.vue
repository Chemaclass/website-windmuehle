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
        <img src="/imgs/flugel-abgebaut/windmill-1.jpeg" :alt="t('gallery.bladesAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-2.jpeg" :alt="t('gallery.bladesAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-3.jpeg" :alt="t('gallery.bladesAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-4.jpeg" :alt="t('gallery.bladesAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/flugel-abgebaut/windmill-5.jpeg" :alt="t('gallery.bladesAlt')" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.moodsTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-1.jpeg" :alt="t('gallery.moodsAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-2.jpeg" :alt="t('gallery.moodsAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-6.jpeg" :alt="t('gallery.moodsAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-4.jpeg" :alt="t('gallery.moodsAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-5.jpeg" :alt="t('gallery.moodsAlt')" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.historicTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-8.jpeg" :alt="t('gallery.historicAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-13.jpeg" :alt="t('gallery.historicAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-14.jpeg" :alt="t('gallery.historicAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-3.jpeg" :alt="t('gallery.historicAlt')" loading="lazy" class="scroll-img" />
      </div>
    </div>

    <div class="gallery-section">
      <h3>{{ t('gallery.fireTitle') }}</h3>
      <div class="scroll-gallery">
        <img src="/imgs/bilder/windmill-11.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-12.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-9.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-10.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-15.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
        <img src="/imgs/bilder/windmill-16.jpeg" :alt="t('gallery.fireAlt')" loading="lazy" class="scroll-img" />
      </div>
    </div>
  </div>
</template>
