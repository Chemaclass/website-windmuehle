<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="home-hero">
    <img src="/imgs/logo.svg" alt="Windmill Logo" class="hero-logo" />
    <h1 class="hero-title">{{ t('home.heroTitle') }}</h1>
    <p class="hero-subtitle">{{ t('home.heroSubtitle') }}</p>
    <p class="hero-text" v-html="t('home.heroText')"></p>
  </div>

  <div class="home-intro">
    <h2>{{ t('home.missionTitle') }}</h2>
    <p v-html="t('home.missionText')"></p>
  </div>

  <div class="home-grid">
    <div>
      <h3>{{ t('home.achievedTitle') }}</h3>
      <ul>
        <li v-for="(item, i) in t('home.achievedItems')" :key="i" v-html="item"></li>
      </ul>
    </div>
    <div class="plan">
      <h3>{{ t('home.planTitle') }}</h3>
      <ul>
        <li v-for="(item, i) in t('home.planItems')" :key="i" v-html="item"></li>
      </ul>
    </div>
  </div>

  <div class="home-gallery">
    <div class="home-gallery-item" v-for="(text, i) in t('home.gallery')" :key="i">
      <img :src="`/imgs/bilder/windmill-${i === 1 ? 6 : i === 2 ? 2 : i === 3 ? 1 : 8}.jpeg`" loading="lazy" class="scroll-img" />
      <div class="focus-text">{{ text }}</div>
    </div>
  </div>
</template>
