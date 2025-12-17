<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="home-hero">
    <div class="hero-content">
      <img src="/imgs/logo.svg" alt="Windmill Logo" class="hero-logo" />
      <h1 class="hero-title">{{ t('home.heroTitle') }}</h1>
      <p class="hero-subtitle">{{ t('home.heroSubtitle') }}</p>
      <p class="hero-text" v-html="t('home.heroText')"></p>
      <a href="spenden" class="cta-button">{{ t('home.heroCta') }}</a>
    </div>
  </div>

  <section class="section-light">
    <div class="home-intro">
      <h2>{{ t('home.missionTitle') }}</h2>
      <p v-html="t('home.missionText')"></p>
    </div>
  </section>

  <section class="section-accent">
    <div class="home-update">
      <h2>{{ t('home.latestInfo') }}</h2>
      <div class="update-images">
        <img src="/imgs/scaffolding/scaffolding3.jpeg" loading="lazy" />
        <img src="/imgs/scaffolding/scaffolding4.jpeg" loading="lazy" />
      </div>
      <p class="update-caption">{{ t('home.updateText') }}</p>
    </div>
  </section>

  <section class="section-light">
    <div class="home-grid">
      <div class="card">
        <h3>{{ t('home.achievedTitle') }}</h3>
        <ul>
          <li v-for="(item, i) in t('home.achievedItems')" :key="i" v-html="item"></li>
        </ul>
      </div>
      <div class="card plan">
        <h3>{{ t('home.planTitle') }}</h3>
        <ul>
          <li v-for="(item, i) in t('home.planItems')" :key="i" v-html="item"></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section-dark">
    <div class="home-gallery">
      <div class="home-gallery-item" v-for="(item, i) in t('home.gallery')" :key="i">
        <img :src="item.img" loading="lazy" />
        <div class="focus-text">{{ item.text }}</div>
      </div>
    </div>
  </section>
</template>
