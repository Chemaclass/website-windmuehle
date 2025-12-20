<script setup lang="ts">
import { useT } from '../.vitepress/i18n'
const t = useT()
</script>

<template>
  <div class="history-page">
    <!-- Hero Section with Parallax -->
    <div class="history-hero">
      <div class="history-hero-content">
        <h1>{{ t('history.title') }}</h1>
        <p>{{ t('history.subtitle') }}</p>
      </div>
    </div>

    <div class="history-wrapper">
      <!-- Intro Section -->
      <div class="history-intro">
        <p v-html="t('history.intro')"></p>
      </div>

      <div class="history-content">
        <div class="history-section">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            </svg>
            {{ t('history.rescueTitle') }}
          </h3>
          <p v-html="t('history.rescueText')"></p>
        </div>

        <div class="history-section">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            {{ t('history.todayTitle') }}
          </h3>
          <p v-html="t('history.todayText')"></p>
        </div>

        <div class="history-image-section">
          <img src="/imgs/bilder/windmill-7.jpeg" alt="Windmill" class="history-image" loading="lazy" />
        </div>

        <div class="history-section">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            {{ t('history.fairyTitle') }}
          </h3>
          <p v-html="t('history.fairyText')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.history-hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: url('/imgs/bilder/windmill-8.jpeg') center center / cover no-repeat fixed;
  padding: 6rem 1rem;
  position: relative;
  text-align: center;
}

.history-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
}

.history-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.history-hero h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.history-hero-content p {
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 0 1px 5px rgba(0,0,0,0.3);
  line-height: 1.6;
}

/* Content Wrapper */
.history-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

/* Intro Section */
.history-intro {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(37, 99, 168, 0.05) 0%, rgba(232, 168, 56, 0.05) 100%);
  border-radius: 20px;
  margin-bottom: 3rem;
}

.history-intro p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
}

/* Content Sections */
.history-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.history-section {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.05);
  position: relative;
}

.history-section h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
  margin: 0 0 1rem;
  font-weight: 700;
}

.history-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
}

/* Image Section */
.history-image-section {
  padding: 1rem 0;
}

.history-image {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

/* Responsive */
@media (max-width: 768px) {
  .history-hero {
    padding: 4rem 1rem;
    background-attachment: scroll;
  }

  .history-hero h1 {
    font-size: 2rem;
  }

  .history-hero-content p {
    font-size: 1rem;
  }

  .history-wrapper {
    padding: 2rem 1rem;
  }

  .history-intro {
    padding: 1.5rem;
  }

  .history-intro p {
    font-size: 1rem;
  }

  .history-section {
    padding: 1.5rem;
  }

  .history-section h3 {
    font-size: 1.25rem;
  }

  .history-section h3 svg {
    width: 20px;
    height: 20px;
  }

  .history-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .history-hero h1 {
    font-size: 1.75rem;
  }
}
</style>
