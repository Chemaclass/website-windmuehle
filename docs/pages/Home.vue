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

  <section class="section-news">
    <div class="news-preview">
      <h2>{{ t('home.newsTitle') }}</h2>
      <div class="news-cards">
        <a href="/aktuelles/2025-12-spende-busse" class="news-card">
          <img src="/imgs/news/susanne-carsten-1000.jpg" alt="Spende" loading="lazy" />
          <div class="news-card-content">
            <span class="news-date">Dezember 2025</span>
            <h3>Großzügige Spende für die Windmühle</h3>
          </div>
        </a>
        <a href="/aktuelles/2025-07-bauabschnitt" class="news-card">
          <img src="/imgs/scaffolding/scaffolding3.jpeg" alt="Bauabschnitt" loading="lazy" />
          <div class="news-card-content">
            <span class="news-date">Juli 2025</span>
            <h3>{{ t('home.latestInfo') }}</h3>
          </div>
        </a>
      </div>
      <a href="/aktuelles/" class="news-link">{{ t('home.allNews') }} →</a>
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
