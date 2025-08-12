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

  <div class="home-update">
    <h2>{{ t('home.latestInfo') }}</h2>
    <div class="update-images">
      <img src="/imgs/scaffolding/scaffolding3.jpeg" loading="lazy" />
      <img src="/imgs/scaffolding/scaffolding4.jpeg" loading="lazy" />
      <p class="update-caption">{{ t('home.updateText') }}</p>
    </div>
  </div>

  <hr>

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
    <div class="home-gallery-item" v-for="(item, i) in t('home.gallery')" :key="i">
      <img :src="item.img" loading="lazy" class="scroll-img" />
      <div class="focus-text">{{ item.text }}</div>
    </div>
  </div>
</template>
